import TravelClub from "../../step1/TravelClub";
import MapStorage from "./MapStorage";

class TravelClubStore{
    clubMap: Map<string, TravelClub>

    constructor(){
        this.clubMap = MapStorage.getInstance().clubMap;
    }
    register(newClub: TravelClub): string | null {
        if(this.exist(newClub.name)){
            return null;
        }
        this.clubMap.set(newClub.name, newClub);
        return newClub.name;
    }
    
    hasClubs(): number {
        return this.clubMap.size;
    }

    find(clubName: string): TravelClub {
        const clubFound = this.clubMap.get(clubName);
        
        if(clubFound){
            return clubFound;
        } else {
            console.log('no such club exists: ' + clubName);
        }
        throw new Error('No such club name : ' + clubName);
    }

    exist(clubName: string): boolean {
        return this.clubMap.get(clubName) !== undefined;
    }
    
    remove(clubFound: TravelClub | null): void {
        if(clubFound != null){
            this.clubMap.delete(clubFound.name);
        }
    }
}
export default TravelClubStore