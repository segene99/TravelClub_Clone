import DateUtil from '../../../util/DateUtil';
import CommunityMember from '../club/CommunityMember';
import Entity from '../Entity';
import SocialBoard from './SocialBoard';

class Posting implements Entity {
  //47. 멤버필드 정의
  usid: string = '';
  title: string = '';
  writerEmail: string = '';
  contents: string = '';
  writtenDate: string = '';
  readCount: number = 0;

  boardId: string = '';
  sequence: number = 0;

  constructor(postingId: string, boardId: string, title: string, writerEmail: string, contents: string) {
    //48. 받아온 값들로 초기화
    this.usid = postingId;
    this.boardId = boardId;
    this.title = title;
    this.writerEmail = writerEmail;
    this.contents = contents;
    this.writtenDate = DateUtil.today();
  }

  getId(): string {
    return this.usid;
  }

  get nextCommentId(): string {
    return `${this.usid} : ${this.sequence++}`;
  }

  static getSample(board: SocialBoard): Posting[] {
    //42. 게시글을 담을 array 선언
    const postings = [];

    //43. 해당 클럽(namoosori club)에 게시판 관리자가 된 멤버(Minsoo Lee)를 leader에 정의 
    const leader = CommunityMember.getSample();
    //44. Posting 클래스로 보드의 클럽아이디와 sequence를 조합한 nextPostingId(1), 클럽아이디, 클럽intro 값, 관리자의 email, 게시글 내용값을 보내어 객체 생성하여 leaderPosting에 정의
    const leaderPosting = new Posting(board.nextPostingId, board.getId(), 'The club intro', leader.email, 'Hello, it\'s good to see you');

    //49. 관리자의 게시글 정보를 담은 leaderPosting 객체를 postings array에 마지막 index에 담음.
    postings.push(leaderPosting);

    //50. 다음 게시글번호로 postingUsid(2)를 설정
    let postingUsid = board.nextPostingId;
    //51.게시글을 남긴 minsoo lee의 정보를 담은 객체를 member에 담음
    const member = CommunityMember.getSample();
    //52. Posting 클래스로 보드의 클럽아이디와 sequence를 조합한 nextPostingId(3), 클럽아이디, 클럽intro 값, 관리자의 email, 게시글 내용값을 보내어 객체 생성하여 memberPosting에 정의
    const memberPosting = new Posting(board.nextPostingId, board.getId(), 'self intro', member.email, 'Hello, My name is minsoo.');

    //53. 다음 게시글번호로 postingUsid(4)를 설정
    memberPosting.usid = postingUsid;
    //54. 관리자의 게시글 정보를 담은 memberPosting 객체를 postings array에 마지막 index에 담음.
    postings.push(memberPosting);

    //55. 게시글을 담은 array postings를 리턴
    return postings;
  }

}
export default Posting;
