import Posting from "../../step1/entity/board/Posting";
import SocialBoard from "../../step1/entity/board/SocialBoard";
import TravelClub from "../../step1/entity/club/TravelClub";
import PostingService from "../service/PositngService";
import PostingDTO from "../service/dto/PostingDTO";
import MapStorage from "./storage/MapStorage";

class PostingServiceLogic implements PostingService{

    postMap: Map<string, Posting>
    boardMap: Map<string, SocialBoard>
    clubMap: Map<string, TravelClub>

    constructor(){
        this.postMap = MapStorage.getInstance().postingMap;
        this.boardMap = MapStorage.getInstance().boardMap;
        this.clubMap = MapStorage.getInstance().clubMap;
    }
    remove(clubid: string): void {
        if (!this.postMap.get(clubid)) {
            throw new Error('\n> No such a posting with id: ' + clubid);
          }
          this.postMap.delete(clubid);    
    }
    modify(targetPost: PostingDTO): void {
        const postingId = targetPost.clubid;

      const currentPost = this.postMap.get(postingId);

      if (!currentPost) {
        throw new Error('\n> No such a posting with id : ' + postingId);
      }

      if (!currentPost.title) {
        targetPost.title = currentPost.title;
      }

      if (!targetPost.content) {
        targetPost.content = currentPost.content;
      }

      const newPosting = targetPost.toPostingModify(postingId, currentPost.boardid);

      this.postMap.set(postingId, newPosting);
    }
    findAll(clubid: string): PostingDTO[] {
        const boardFound = this.boardMap.get(clubid);
        if(!boardFound){
            throw new Error('no board found');
        }
        const postList = Array.from(this.postMap.values());
        return postList.filter(post => clubid === post.boardid).map(post=> PostingDTO.toPostingDTO(post));

    }
    find(postId: string): PostingDTO {
        const postFound = this.postMap.get(postId);
        if(!postFound){
            throw new Error('post not found');
        }

        return PostingDTO.toPostingDTO(postFound);
    }


    register(clubid: string, newPost: PostingDTO): void {
        const clubFound = this.clubMap.get(clubid);
        if(!clubFound){  
            console.log('no club found')
            return;
        }
        const boardFound = this.boardMap.get(clubid);
        if(!boardFound){
            console.log('no board found')
            return;
        }
        const newPosting = newPost.toPosting(boardFound);
        this.postMap.set(newPosting.getId(), newPosting);
    }



}
export default PostingServiceLogic