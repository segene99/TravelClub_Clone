import TravelClub from "./TravelClub";

class ClubStorage{
    
    clubs: TravelClub[];

    constructor(){
        this.clubs = new Array;
    }

    findAll(): TravelClub[]{
        return this.clubs;
    }

    find(clubName: string): TravelClub | undefined{
        for(let i=0; i<this.clubs.length; i++){
            if(this.clubs[i].name === clubName){
                return this.clubs[i];
            } else {
                return undefined;
            }
        }
    }

    exist(clubName: string): boolean{
        for(const club of this.clubs){
            if(clubName === club.name){
                return true;
            }
            
        }
        return false;
    }

    hasClubs(): boolean{
        return this.clubs.length === 0
    }

    register(newClub: TravelClub): number{
       return this.clubs.push(newClub);
    }
}
export default ClubStorage