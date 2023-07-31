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

     getAllClubs(): TravelClub[] | null{
        return this.clubs;
     }

     push(name: string, intro: string): boolean{
        if(this.clubs.push(name, intro)){
            return true;
        }else {
            return true;
        }
     }
}
export default ClubStorage