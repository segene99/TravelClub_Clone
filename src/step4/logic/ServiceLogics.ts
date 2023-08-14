import BoardService from "../service/BoardService";
import ClubService from "../service/ClubService";
import CommentService from "../service/CommentService";
import MemberService from "../service/MemberService";
import PostingService from "../service/PostingService";
import Services from "../service/Services";
import BoardServiceLogic from "./BoardServiceLogic";
import ClubServiceLogic from "./ClubServiceLogic";
import CommentServiceLogic from "./CommentServiceLogic";
import MemberServiceLogic from "./MemberServiceLogic";
import PostingServiceLogic from "./PostingServiceLogic";

class ServiceLogics implements Services {
    //싱글톤
    private static services: Services;

    clubService: ClubService | null;
    memberService: MemberService | null;
    boardService: BoardService | null;
    postingService: PostingService | null;
    commentService: CommentService | null;

    private constructor() {
      //
      this.clubService = null;
      this.memberService = null;
      this.boardService = null;
      this.postingService = null;
      this.commentService = null;
    }

    static shareInstance(): Services {
      //
      if (!this.services) {
        this.services = new ServiceLogics();
      }
      return this.services;
    }

    createClubService(): ClubService {
      //
      if (!this.clubService) {
        this.clubService = new ClubServiceLogic();
      }
      return this.clubService;
    }

    createMemberService(): MemberService {
      //
      if (!this.memberService) {
        this.memberService = new MemberServiceLogic();
      }
      return this.memberService;
    }

    createBoardService(): BoardService {
      //
      if (!this.boardService) {
        this.boardService = new BoardServiceLogic();
      }
      return this.boardService;
    }

    createPostingService(): PostingService {
      //
      if (!this.postingService) {
        this.postingService = new PostingServiceLogic();
      }
      return this.postingService;
    }

    createCommentService(): CommentService {
      //
      if (!this.commentService) {
        this.commentService = new CommentServiceLogic();
      }
      return this.commentService;
    }

}
export default ServiceLogics;
