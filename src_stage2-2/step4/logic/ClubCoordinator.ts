import MemberCoordinator from "./MemberCoordinator";
import TravelClubStore from "../storage/TravelClubStore";
import TravelClub from "../../step1/TravelClub";


class ClubCoordinator{

    memberCoordinator: MemberCoordinator
    travelClubStore: TravelClubStore

    constructor(){
        this.memberCoordinator = new MemberCoordinator();
        this.travelClubStore = new TravelClubStore();
    }

    remove(clubFound: TravelClub | null): void {
        this.travelClubStore.remove(clubFound);
    }
    modify(name: string, newIntro: string): void {
        if(!this.travelClubStore.exist(name)){
            return;
        }
        const club = this.travelClubStore.find(name);
        club?.setName(name);
        club?.setIntro(newIntro);
    }
    hasClubs(): number {
        return this.travelClubStore.hasClubs();
    }
    find(clubName: string): TravelClub {
        return this.travelClubStore.find(clubName);
    }

    register(newClub: TravelClub): void {
        this.travelClubStore.register(newClub);
    }
    exist(clubName: string): boolean {
        return this.travelClubStore.exist(clubName);
    }

}
export default ClubCoordinator