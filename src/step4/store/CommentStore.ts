import Comments from "../entity/board/Comments";

interface CommentStore {
  create(comment: Comments): string;
  retrieve(commentId: string): Comments | null;
  retrieveByPostingId(postingId: string): Comments[];
  update(comment: Comments): void;
  delete(commentId: string): void;
  exists(commentId: string): boolean;
}
export default CommentStore;
