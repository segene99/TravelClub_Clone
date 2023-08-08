import Posting from "../../../step1/entity/board/Posting"
import SocialBoard from "../../../step1/entity/board/SocialBoard"
import CommunityMember from "../../../step1/entity/club/CommunityMember"
import TravelClub from "../../../step1/entity/club/TravelClub"


class MapStorage{

    private static instance: MapStorage

    clubMap: Map<string, TravelClub>
    boardMap: Map<string, SocialBoard>
    postingMap: Map<string, Posting>
    memberMap: Map<string, CommunityMember>
    autoIdMap: Map<string,number>

    private constructor(){
        this.autoIdMap = new Map<string, number>();
        this.boardMap = new Map<string, SocialBoard>();
        this.clubMap = new Map<string, TravelClub>();
        this.memberMap = new Map<string, CommunityMember>();
        this.postingMap = new Map<string, Posting>();
    }

    static getInstance(): MapStorage {
        if(this.instance === undefined){
            this.instance = new MapStorage();
        }
        return this.instance;
    }


}
export default MapStorage