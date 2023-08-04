import TravelClub from "../../step1/TravelClub";
import MemberCoordinator from "./MemberCoordinator"

class ClubCoodinator{
    modify(targetClub: TravelClub): TravelClub | null {
        const club = this.find(targetClub.name);
        club?.setName(targetClub.name);
        club?.setIntro(targetClub.intro);
        if(targetClub == club){
            return club;
        } else {
            return null;
        }
    }
   
 
    memberCoordinator: MemberCoordinator
    clubs: TravelClub[];

    constructor(){
        this.memberCoordinator = new MemberCoordinator();
        this.clubs = [];
    }

    register(newClub: TravelClub): boolean {
        if(this.clubs.push(newClub)){
            return true;
           }else{
             return false;
           }    
    }
    findAll(): TravelClub[] {
        return this.clubs;
    }
    find(clubName: string): TravelClub | null {
        for(const club of this.clubs){
            if(club.name === clubName){
                return club;
            }
        }
        return null;    }
    hasClubs(): boolean{
            return this.clubs.length !== 0;
    }
    remove(targetClub: TravelClub): void {
        const index = this.clubs.indexOf(targetClub);
        this.clubs.splice(index, 1);
    }
    exist(clubName: string): boolean{
        for(const club of this.clubs){
            if(club.name === clubName){
                return true;
            }
        }
        return false;
    }

   
}
export default ClubCoodinator