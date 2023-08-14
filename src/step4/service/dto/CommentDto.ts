import DateUtil from '../../../util/DateUtil';
import Comments from '../../entity/board/Comments';
import Posting from '../../entity/board/Posting';

class CommentDto {
  usid: string = '';
  writer: string = '';
  contents: string = '';
  writtenDate: string = '';

  constructor(writer: string, contents: string) {
    //
    this.writer = writer;
    this.contents = contents;
    this.writtenDate = DateUtil.today();
  }

  static fromEntity(comment: Comments): CommentDto {
    //
    const commentDto = new CommentDto(comment.writer, comment.contents);
    commentDto.writtenDate = comment.writtenDate;
    commentDto.usid = comment.usid;
    return commentDto;
  }

  get commentDtoInfo(): string {
    //
    return `Comment id: ${this.usid}, writer: ${this.writer}, contents: ${this.contents}, written date: ${this.writtenDate}`;
  }

  toCommentInPosting(posting: Posting): Comments {
    //
    const comment = new Comments(posting.nextCommentId, posting.getId(), this.writer, this.contents);
    comment.writtenDate = this.writtenDate;
    return comment;
  }
}
export default CommentDto;
