
import ClubMember from "../../step1/ClubMember";
import TravelClub from "../../step1/TravelClub";
import ClubMemberStore from "../storage/ClubMemberStore";
import TravelClubStore from "../storage/TravelClubStore";

class MemberCoordinator{
 

    clubMemberStore: ClubMemberStore;

    constructor(){
        this.clubMemberStore = new ClubMemberStore();
    }

    register(currentClub: string, newMember: ClubMember): void{
        this.clubMemberStore.register(currentClub,newMember);
    }

    hasMembers(name: string): boolean{
        return this.clubMemberStore.hasMembers(name);
    }

    exist(clubName: string, emailInput: string): boolean {
        return this.clubMemberStore.exist(clubName, emailInput);
    }
    
    find(currentClubName: string, emailInput: string): ClubMember {
        return this.clubMemberStore.find(currentClubName, emailInput);
    }
    modify(targetMember: ClubMember, newInfoMap: Map<string, string>): void {
        this.clubMemberStore.modify(targetMember, newInfoMap);
    }
    remove(currentClub: TravelClub, memberFounded: ClubMember): void {
        this.clubMemberStore.remove(currentClub, memberFounded);
    }

   

}
export default MemberCoordinator