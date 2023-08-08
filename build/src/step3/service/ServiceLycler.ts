import BoardService from "./BoardService";
import ClubService from "./ClubService"
import MemberService from "./MemberService";
import PostingService from "./PositngService";

interface ServiceLycler{

    createClubService(): ClubService;
    createMemberService(): MemberService;
    createPostingService(): PostingService;
    createBoardService(): BoardService;

}
export default ServiceLycler