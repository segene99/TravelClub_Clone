import TravelClub from "../../step1/TravelClub";
import MemberCoordinator from "./MemberCoordinator"

class ClubCoordinator {

    clubs: TravelClub[];
    memberCoordinator: MemberCoordinator;

    constructor() {
        this.clubs = [];
        this.memberCoordinator = new MemberCoordinator();
    }

    //클럽 이미 존재 확인
    exist(clubName: string): TravelClub | null {
        for(const club of this.clubs){
            if(club.name == clubName){
                return club;
            }
        }
        return null;
    }
    register(newClub: TravelClub): boolean{
        if(this.clubs.push(newClub)){
            return true;
        }else{
            return false;
        }
    }
    hasClubs(): boolean {
        return this.clubs.length !== 0;
    }
    modify(newClubName: string, newIntro: string): void {
        const club = this.exist(newClubName);
        club?.setName(newClubName);
        club?.setIntro(newIntro);
    }
    remove(targetClub: TravelClub): boolean {
        const index = this.clubs.indexOf(targetClub);
        this.clubs.splice(index, 1);
        if(this.clubs.indexOf(targetClub)){
            return true;
        }
        return false;
    }
  
}
export default ClubCoordinator