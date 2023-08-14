import DateUtil from "../../../util/DateUtil";
import Posting from "../../entity/board/Posting";
import SocialBoard from "../../entity/board/SocialBoard";

class PostingDto{

    usid: string = '';
    title: string = '';
    writerEmail: string = '';
    contents: string = '';
    writtenDate: string = '';
    readCount: number = 0;

    constructor(title: string, writerEmail: string, contents: string){
     this.title = title;
      this.writerEmail = writerEmail;
      this.contents = contents;
      this.writtenDate = DateUtil.today();
    }

    toPosting(boardFound: SocialBoard): Posting {
        const posting = new Posting(boardFound.nextPostingId, boardFound.getId(), this.title, this.writerEmail, this.contents);
        //postingId: string, boardId: string, title: string, content: string, email: string
        posting.writtenDate = this.writtenDate;
        posting.readCount = this.readCount;

        return posting;
    }

    static toPostingDTO(posting: Posting): PostingDto {
        const postingDto = new PostingDto(posting.title, posting.writerEmail, posting.contents);

      postingDto.usid = posting.usid;
      postingDto.writtenDate = posting.writtenDate;
      postingDto.readCount = posting.readCount;

      return postingDto;

    }
    toPostingModify(postingId: string, boardid: string): Posting {
        const posting = new Posting(postingId, boardid, this.title, this.contents, this.writerEmail );
        //postingId: string, boardId: string, title: string, content: string, email: string
        posting.writtenDate = this.writtenDate;
        posting.readCount = this.readCount;
        return posting;
    }
    get postingDtoInfo(): string {
        //게시글 내용 출력
        return `Posting id: ${this.usid}, title: ${this.title}, writer email: ${this.writerEmail}, read count: ${this.readCount}, written date: ${this.writtenDate}, contents: ${this.contents}`;
      }
      toPostingIn(postingId: string, boardId: string): Posting {
        const posting = new Posting(postingId, boardId, this.writerEmail, this.title, this.contents);
  
        posting.writtenDate = this.writtenDate;
        posting.readCount = this.readCount;
  
        return posting;
      }

}
export default PostingDto