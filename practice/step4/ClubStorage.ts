import TravelClub from "./TravelClub";

class ClubStorage{
     clubs: TravelClub[];

     constructor(){
        this.clubs = [];
     }

     exist(name: string): boolean{
        for(const club of this.clubs){
            if(club.name === name){
                return true;
            }
        }
        return false;
     }

     count(): number{
        return this.clubs.length;
     }

     getClub(name: string): TravelClub | null{
        for(const club of this.clubs){
            if(club.name === name){
                return club;
            }
        }
     }
}
export default ClubStorage