import { question } from "readline-sync";
import ClubCoordinator from './ClubCoordinator';
import TravelClub from "./TravelClub";

class ClubConsole{
    clubCoordinator: ClubCoordinator;

    constructor(){
    }
    showMenu(): void{
        while(true){
            let inputNumber = 0;
    
            this.displayMainMenu();
            inputNumber = this.selectMainMenu();
    
            switch(inputNumber){
                case 1:
                    this.register();
                    break;
                case 2:
                    this.find();
                    break;
                case 3:
                    this.findAll();
                    break;
                case 0:
                default:
                    console.log('choose again!');
            }
        }
    }
    
    displayMainMenu(): void{
        console.log('1.register');
        console.log('2.find');
        console.log('3.findAll');
        console.log('0.exitProgram');
    }

    selectMainMenu(): number{
        const answer = question('choose number');
        const menuNumber = parseInt(answer);

        if(menuNumber >=0 && menuNumber <= 3){
            return menuNumber;
        }
        return -1;
    }

    register(): void{
        //유저input
       const answer = question('input club Name:');
       let clubName = answer;

       //공백제거
       clubName = clubName.trim();

       //값 있는지 체크
       if(!clubName || !clubName.length){
            console.log('club name cannot be null');
       }

       //중복체크
       const foundClub = this.clubCoordinator.exist(clubName);

       if(foundClub){
        console.log('club name already exists -->' + clubName);
        return;
    }
        let clubIntro = question('input club intro');
        
        clubIntro = clubIntro.trim();

        const newClub = new TravelClub(clubName, clubIntro);
        let savedClubName = this.clubCoordinator.register(newClub);

        if(savedClubName){
            console.log('registered club:' + newClub);
        } else {
            console.log('the club with same name already exists -->' + clubName);
        }
    }

    find(): void {
        let clubName ='';
        
        while(true){
            //스토리지에 club이 있는지 확인
            clubName = this.displayFindMenuAndGetKey();

            if(clubName === '0'){
                return;
            }

            //검색 진행
                const travelClub = this.clubCoordinator.find(clubName);

            if(travelClub){
                console.log('Found Club: ', travelClub);
                break;
            }else{
                console.log('no such club exists: ' , clubName);
            }
                
        }
    }
    //스토리지에 club이 있는지 확인
    displayFindMenuAndGetKey(): string{
        if(!this.clubCoordinator.hasClubs()){
            console.log('No clubs in the storage');
            return '0';
        }
        const clubName = question('input club anme to find(0. previous menu)');

        return clubName.trim();
    }

    findAll(): void{

            if(!this.clubCoordinator.hasClubs()){
                console.log('No clubs in the storage');
                 return;
            }

            const clubs = this.clubCoordinator.findAll();
            
            //총 클럽 갯수
            console.log('found' + clubs.length + 'clubs.');

            //찾은 클럽 이름 출력
            for(let i = 0; i<clubs.length; i++){
                console.log('\n> Found Club', clubs[i]);
            }

    }

    
    

}
export default ClubConsole