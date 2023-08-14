import BoardService from "./BoardService";
import ClubService from "./ClubService";
import MemberService from "./MemberService";
import PostingService from "./PostingService";

interface Services{
    createClubService(): ClubService;
    createMemberService(): MemberService;
    createBoardService(): BoardService;
    createPostingService(): PostingService;
    createCommentService(): CommentService;
}
export default Services