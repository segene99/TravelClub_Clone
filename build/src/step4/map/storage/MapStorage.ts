import Posting from "../../entity/board/Posting";
import SocialBoard from "../../entity/board/SocialBoard";
import CommunityMember from "../../entity/club/CommunityMember";
import TravelClub from "../../entity/club/TravelClub";

class MapStorage {
    private static uniqueInstance: MapStorage;

    clubMap: Map<string, TravelClub>;
    memberMap: Map<string, CommunityMember>;
    boardMap: Map<string, SocialBoard>;
    postingMap: Map<string, Posting>;
    commentMap: Map<string, Comment>;
    autoIdMap: Map<string, number>;

    private constructor() {
      this.clubMap = new Map<string, TravelClub>();
      this.memberMap = new Map<string, CommunityMember>();
      this.boardMap = new Map<string, SocialBoard>();
      this.postingMap = new Map<string, Posting>();
      this.commentMap = new Map<string, Comment>();
      this.autoIdMap = new Map<string, number>();
    }

    static getInstance(): MapStorage {
      if (this.uniqueInstance === undefined) {
        this.uniqueInstance = new MapStorage();
      }
      return this.uniqueInstance;
    }
}
export default MapStorage;
