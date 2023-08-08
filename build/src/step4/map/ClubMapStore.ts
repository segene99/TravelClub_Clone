import TravelClub from "../entity/club/TravelClub";
import ClubStore from "../store/ClubStore";
import MapStorage from "./storage/MapStorage";

class ClubMapStore implements ClubStore{

    clubMap: Map<string, TravelClub>
    autoIdMap: Map<string, number>;

    constructor() {
        this.clubMap = MapStorage.getInstance().clubMap;
        this.autoIdMap = MapStorage.getInstance().autoIdMap;
      
    }
    delete(usid: string): void {
        this.clubMap.delete(usid);
    }
    exists(usid: string): boolean {
        return this.clubMap.get(usid) !== undefined;
    }
    update(updatedClub: TravelClub): void {
        this.clubMap.set(updatedClub.getId(), updatedClub);
    }
    retrieve(usid: string): TravelClub | null {
        return this.clubMap.get(usid) || null;
    }

    create(club: TravelClub): string {
        const targetClub = this.clubMap.get(club.getId());

        if (targetClub) {
          throw new Error('Club already exists with id: ' + targetClub.getId());
        }
  
        const className = TravelClub.name;
  
        if ('getId' in club || 'setAutoId' in club) {
          if (this.autoIdMap.get(className) === undefined) {
            this.autoIdMap.set(className, Number(club.getId()));
          }
          let keySequence = this.autoIdMap.get(className);
  
          if (keySequence !== undefined) {
            const autoId = keySequence.toString();
  
            club.setAutoId(autoId);
            this.autoIdMap.set(className, ++keySequence);
          }
        }
  
        this.clubMap.set(club.getId(), club);
  
        return club.getId();   
    }
    retrieveByName(name: string): TravelClub | null {
        const clubs = Array.from(this.clubMap.values());

        if (!clubs.length) {
          return null;
        }
  
        return clubs.find(club => club.name === name) || null;    }

}
export default ClubMapStore