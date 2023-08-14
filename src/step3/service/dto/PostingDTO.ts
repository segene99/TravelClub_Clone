import Posting from "../../../step1/entity/board/Posting";
import SocialBoard from "../../../step1/entity/board/SocialBoard";
import DateUtil from "../../../util/DateUtil";

class PostingDTO{


    content: string = '';
    createdDate: string = '';
    clubid: string = ''
    title: string = '';
    readCount: number = 0;
    email: string = '';
    boardid: string = '';

    constructor(email: string, title: string, content: string){
        this.email = email;
        this.title = title;
        this.content = content;
        this.createdDate = DateUtil.today()
    }

    toPosting(boardFound: SocialBoard): Posting {
        const posting = new Posting(boardFound.nextPostingId, boardFound.clubid, this.title, this.content, this.email );
        //postingId: string, boardId: string, title: string, content: string, email: string
        posting.createdDate = this.createdDate;
        posting.readCount = this.readCount;
        return posting;
    }

    static toPostingDTO(postFound: Posting): PostingDTO {
        const postingDTO = new PostingDTO(postFound.email, postFound.title, postFound.content);
        postingDTO.createdDate = postFound.createdDate;
        postingDTO.readCount = postFound.readCount;
        return postingDTO;

    }
    toPostingModify(postingId: string, boardid: string): Posting {
        const posting = new Posting(postingId, boardid, this.title, this.content, this.email );
        //postingId: string, boardId: string, title: string, content: string, email: string
        posting.createdDate = this.createdDate;
        posting.readCount = this.readCount;
        return posting;
    }

}
export default PostingDTO