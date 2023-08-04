import TravelClub from "../entity/TravelClub";
import ClubStore from "../storage/ClubStore";
import MemberCoordinator from "./MemberCoordinator";

class ClubCoordinator{

    memberCoordinator: MemberCoordinator
    clubStore: ClubStore

    constructor(){
        this.memberCoordinator = new MemberCoordinator();
        this.clubStore = new ClubStore();
    }

    remove(clubFound: TravelClub | null): void {
        this.clubStore.remove(clubFound);
    }
    modify(name: string, newIntro: string): void {
        if(!this.clubStore.exist(name)){return;}
        const club = this.clubStore.find(name);
        club?.setName(name);
        club?.setIntro(newIntro);
    }
    hasClubs(): number {
        return this.clubStore.hasClubs();
    }
    find(clubName: string): TravelClub {
        return this.clubStore.find(clubName);
    }

   

    register(newClub: TravelClub): void {
        this.clubStore.register(newClub);
    }
    exist(clubName: string): boolean {
        return this.clubStore.exist(clubName);
    }

}
export default ClubCoordinator