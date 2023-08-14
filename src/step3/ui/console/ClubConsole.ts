import { question } from "readline-sync";
import TravelClub from "../../../step1/entity/club/TravelClub";
import ServiceLogicLycler from "../../logic/ServiceLogicLycler";
import ClubService from "../../service/ClubService";
import ClubDTO from "../../service/dto/ClubDTO";

class ClubConsole{


    clubService: ClubService

    constructor(){
        this.clubService = ServiceLogicLycler.shareInstance().createClubService();
    }

  register():void {
    while (true) {
        //12. 유저의 클럽 이름 입력
        const clubName = question('\n club name (0.Club Menu): ');
        //0이면 메뉴로 돌아가기
        if (clubName === '0') {
          return;
        }
        //13. 유저의 클럽 인트로 입력
        const clubIntro = question(' club intro (0.Club menu): ');

        if (clubIntro === '0') {
          return;
        }

        try {
          //14. 유저가 보낸 값으로 재정의한 club객체 받음
          const club = new TravelClub(clubName, clubIntro);
          //15. 이 club 객체에 담긴 유저가 등록한 클럽의 이름과 인트로를 파라미터로 보내어 TravelClubDto롤 객체 생성
          const clubDto = new ClubDTO(club.name, club.intro);

          //16. clubDto를 파라미터로 전송하여 service에서 register를 기능처리를 위해 전달
          //service는 인터페이스 serviceLogic이 상속받아서 serviceLogic의 register()메소드로 재정의
          this.clubService.register(clubDto);
          console.log('\n> Registered Club :', clubDto);
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
      }
  }
  find(): ClubDTO | null {
    let clubFound = null;
    while(true){
        const clubName = question('enter the club name(0. back to menu)');
        if(clubName === '0'){
            break;
        }
        clubFound = this.clubService.findByName(clubName);
        console.log('Found Club: ', clubFound);
        break;
    }
    return clubFound;
  }
  findOne(): ClubDTO | null {
    //
    let clubFound = null;

    while (true) {
      //
      const clubName = question('\n club name to find (0.Club menu): ');

      if (clubName === '0') {
        break;
      }

      try {
        clubFound = this.clubService.findByName(clubName);
        console.log('\n> Found club: ', clubFound);
        break;
      }
      catch (e) {
        if(e instanceof Error) {
          console.error(`Error: ${e.message}`);
        }
      }
    }
    return clubFound;
  }
  modify()  {

    const targetClub = this.findOne();

    if(!targetClub){
        console.log('no clubs found to modify')
        return;
    }
    const newName = question('enter new name(0. back to menu / Enter. no change): ');
    if (newName === '0') {
        return;
    }
    if (newName) {
        targetClub.name = newName;
    }
    const newIntro = question(' enter new intro(0. back to menu / Enter. no change): ');

      if (newIntro) {
        targetClub.intro = newIntro;
      }

      this.clubService.modify(targetClub);
      console.log('modified club: ', targetClub);


}
  remove(): void {
    const targetClub = this.findOne();

    if(!targetClub){
        return;
    }
    const confirmation = question('remove for sure?(1.yes / 2. no)')
    if(confirmation === '1'){
        this.clubService.remove(targetClub.usid);
    }else{
        console.log('removal cancelled')
    }
  }




}
export default ClubConsole