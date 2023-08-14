import CommunityMember from "../entity/club/CommunityMember";
import MemberDto from "../service/dto/MemberDto";
import MemberStore from "../store/MemberStore";
import MapStores from "./MapStores";
import MapStorage from "./storage/MapStorage";

class MemberMapStore implements MemberStore{

    memberMap: Map<string, CommunityMember>

    constructor(){
        this.memberMap = MapStorage.getInstance().memberMap;
    }
   
    delete(email: string): void {
        this.memberMap.delete(email);
    }
    exists(email: string): boolean {
      return this.memberMap.get(email) !== undefined;
    }
    update(member: CommunityMember): void {
        this.memberMap.set(member.getId(), member);
    }

    create(member: CommunityMember): string {
        const targetMember = this.memberMap.get(member.getId());

        if (targetMember) {
          throw new Error('\n> Member already exists with email: ' + member.getId());
        }
  
        this.memberMap.set(member.getId(), member);
  
        return member.getId();    
    }

    retrieveByEmail(email: string): CommunityMember | null {
         return this.memberMap.get(email) || null;
    } 



}
export default MemberMapStore