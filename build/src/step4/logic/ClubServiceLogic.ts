import MapStores from "../map/MapStores";
import ClubService from "../service/ClubService";
import ClubDto from "../service/dto/ClubDto";
import ClubStore from "../store/ClubStore";

class ClubServiceLogic implements ClubService{

    clubStore: ClubStore

    constructor(){
        this.clubStore = MapStores.getInstance().requestClubStore();
    }
    remove(usid: string): void {
        if (!this.clubStore.exists(usid)) {
            throw new Error('No such club with id: ' + usid);
          }
          this.clubStore.delete(usid);    
    }
    modify(clubDto: ClubDto): void {
        const foundClub = this.clubStore.retrieveByName(clubDto.name);

            if (foundClub) {
                throw new Error('Club already exists with name: ' + clubDto.name);
            }

            const targetClub = this.clubStore.retrieve(clubDto.usid);

            if (!targetClub) {
                throw new Error('No such club with id: ' + clubDto.usid);
            }

            if (!clubDto.name) {
                clubDto.name = targetClub.name;
            }
            if (!clubDto.intro) {
                clubDto.intro = targetClub.intro;
            }

            this.clubStore.update(clubDto.toTravelClub());    
    }
    findByName(clubName: string): ClubDto | null {
        const foundClub = this.clubStore.retrieveByName(clubName);

        if (!foundClub) {
          throw new Error('No such club with name: ' + name);
        }
        return ClubDto.toClubDto(foundClub);    
    }

    register(clubDto: ClubDto): void {
        const foundClub = this.clubStore.retrieveByName(clubDto.name);

        if (foundClub) {
          throw new Error('Club already exists with name: ' + clubDto.name);
        }
        const club = clubDto.toTravelClub();
        const clubId = this.clubStore.create(club);
  
        clubDto.usid = clubId;
    }

}
export default ClubServiceLogic