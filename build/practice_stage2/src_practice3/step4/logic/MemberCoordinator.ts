import ClubMember from "../entity/ClubMember";
import TravelClub from "../entity/TravelClub";
import MemberStore from "../storage/MemberStore";

class MemberCoordinator{
 

    memberStore: MemberStore;

    constructor(){
        this.memberStore = new MemberStore();
    }

    register(currentClub: string, newMember: ClubMember): void{
        this.memberStore.register(currentClub,newMember);
    }

    hasMembers(name: string): boolean{
        return this.memberStore.hasMembers(name);
    }

    exist(clubName: string, emailInput: string): boolean {
        return this.memberStore.exist(clubName, emailInput);
    }
    
    find(currentClubName: string, emailInput: string): ClubMember {
        return this.memberStore.find(currentClubName, emailInput);
    }
    modify(targetMember: ClubMember, newInfoMap: Map<string, string>): void {
        this.memberStore.modify(targetMember, newInfoMap);
    }
    remove(currentClub: TravelClub, memberFounded: ClubMember): void {
        this.memberStore.remove(currentClub, memberFounded);
    }

   

}
export default MemberCoordinator