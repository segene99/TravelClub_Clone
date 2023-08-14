import Comments from '../entity/board/Comments';
import CommentStore from '../store/CommentStore';
import MapStorage from './storage/MapStorage';

class CommentMapStore implements CommentStore {
  //
  commentMap: Map<string, Comments>;

  constructor() {
    this.commentMap = MapStorage.getInstance().commentMap;
  }


  create(comment: Comments): string {
    //
    const targetComment = this.commentMap.get(comment.getId());

    if (targetComment) {
      throw new Error('\n> Already exists: ' + targetComment);
    }
    this.commentMap.set(comment.getId(), comment);

    return comment.getId();
  }

  retrieve(commentId: string): Comments | null {
    //
    return this.commentMap.get(commentId) || null;
  }

  retrieveByPostingId(postingId: string): Comments[] {
    //
    const comments = Array.from(this.commentMap.values());
    return comments.filter(comment => comment.postingId === postingId);
  }

  update(comment: Comments): void {
    //
    this.commentMap.set(comment.getId(), comment);
  }

  delete(commentId: string): void {
    //
    this.commentMap.delete(commentId);
  }

  exists(commentId: string): boolean {
    //
    return this.commentMap.get(commentId) !== null;
  }

}
export default CommentMapStore;
