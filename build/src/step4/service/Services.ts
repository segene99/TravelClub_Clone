import ClubService from "./ClubService";
import MemberService from "./MemberService";

interface Services{
    createClubService(): ClubService;
    createMemberService(): MemberService;
    createBoardService(): BoardService;
    createPostingService(): PostingService;
    createCommentService(): CommentService;
}
export default Services