import DateUtil from "../../../util/DateUtil";
import Entity from "../Entity";
import CommunityMember from "../club/CommunityMember";
import SocialBoard from "./SocialBoard";

class Posting implements Entity{


    content: string = '';
    createdDate: string = '';
    clubid: string = ''
    title: string = '';
    readCount: number = 0;
    email: string = '';
    boardid: string = '';
    seq: number  = 0;

    constructor(postingId: string, boardId: string, title: string, content: string, email: string){
        this.clubid = postingId;
        this.boardid = boardId;
        this.title = title;
        this.content = content;
        this.email = email;
        this.createdDate = DateUtil.today();
    }
    getId(): string {
        return this.clubid;
    }

   static getSamples(board: SocialBoard): Posting[]{

    const leader = CommunityMember.getSample();
    const leaderPosting = new Posting(board.nextPostingId, board.getId(), 'leader title', 'I\'m a leader', leader.email);

    const member = CommunityMember.getSample();
    const memberPosting = new Posting(board.nextPostingId, board.getId(), 'member title', 'I am a member', member.email);

    const postings = [];

    postings.push(leaderPosting, memberPosting);

    return postings

    }

}
export default Posting