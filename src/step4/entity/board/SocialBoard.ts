import DateUtil from '../../../util/DateUtil';
import CommunityMember from '../club/CommunityMember';
import TravelClub from '../club/TravelClub';
import Entity from '../Entity';


class SocialBoard implements Entity {
    //36. 멤버필드 선언
    clubId: string = '';
    sequence: number = 0;
    boardName: string = '';
    adminEmail: string = '';
    createDate: string = '';

    constructor(clubId: string, boardName: string, adminEmail: string ) {
      //37. 받은 클럽아이디, 클럽이름, 멤버의 이메일로 값 초기화, 생성날짜는 오늘로
      this.clubId = clubId;
      this.boardName = boardName;
      this.adminEmail = adminEmail;
      this.createDate = DateUtil.today();
    }

    getId(): string {
      //46. 클럽아이디 리턴
      return this.clubId;
    }

    get nextPostingId(): string {
      //45. 게시글 번호 생성하여 리턴
      //리턴값을 보내고 후위연산자를 실행해서 진행
      return `${this.clubId} : ${this.sequence++}`;
    }

    static getSample(club: TravelClub): SocialBoard {
      //34. CommunityMember 클래스의 getSample 호출하여 맴버쉽에 가입한 커뮤니티멤버의 정보를 담은 객체를 member에 정의
      const member = CommunityMember.getSample();

      //35. club의 usid, 클럽name,위 멤버의 email을 보내 SocialBoard 클래스를 객체로 생성하여 board에 정의
      const board = new SocialBoard(club.usid, club.name, member.email);

      //38. 생성날짜를 오늘에서 2021.01.01로 다시 정의
      board.createDate = '2021.01.01';

      //39. SocialBoard 객체를 리턴
      return board;
    }

}
export default SocialBoard;
