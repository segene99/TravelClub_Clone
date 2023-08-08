import ClubStore from "../store/ClubStore";
import Stores from "../store/Stores";
import ClubMapStore from "./ClubMapStore";

class MapStores implements Stores{

    private static instance: Stores

    clubStore: ClubStore | null;
    memberStore: MemberStore | null;
    boardStore: BoardStore | null;
    postingStore: PostingStore | null;
    commentStore: CommentStore | null;

    private constructor() {
      this.clubStore = null;
      this.memberStore = null;
      this.boardStore = null;
      this.postingStore = null;
      this.commentStore = null;
    }
    static getInstance(): Stores {
        if (!this.instance) {
          this.instance = new MapStores();
        }
        return this.instance;
      }

    requestMemberStore(): MemberStore {
        if (!this.memberStore) {
            this.memberStore = new MemberMapStore();
          }
          return this.memberStore;    
        }
        requestClubStore(): ClubStore {
            if (!this.clubStore) {
              this.clubStore = new ClubMapStore();
            }
            return this.clubStore;
          }
      
          requestBoardStore(): BoardStore {
            if (!this.boardStore) {
              this.boardStore = new BoardMapStore();
            }
            return this.boardStore;
          }
      
          requestPostingStore(): PostingStore {
            if (!this.postingStore) {
              this.postingStore = new PostingMapStore();
            }
            return this.postingStore;
          }
      
          requestCommentStore(): CommentStore {
            if (!this.commentStore) {
              this.commentStore = new CommentMapStore();
            }
            return this.commentStore;
          }
      
      }
      export default MapStores;
      