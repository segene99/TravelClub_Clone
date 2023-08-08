import Posting from "../../step1/entity/board/Posting";
import PostingDTO from "./dto/PostingDTO";

interface PostingService{
    remove(clubid: string): void;
    modify(targetPost: PostingDTO): void;
    findAll(clubid: string): PostingDTO[];
    find(postId: string): PostingDTO;
    register(clubid: string, newPost: PostingDTO): void;

    

}
export default PostingService