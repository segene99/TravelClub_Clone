import ClubStorage from './ClubStorage';
import TravelClub from './TravelClub';

class ClubCoordinator{
    
    clubStorage: ClubStorage;

    constructor(){
        this.clubStorage = new ClubStorage();
    }

    register(newClub: TravelClub): boolean{
        const club = this.clubStorage.store(newClub);
        return club !== null;
    }

    exist(name: string): boolean{
        return this.clubStorage.exist(name);
    }

    hasClubs(): boolean{
        return this.clubStorage.count() !== 0;
    }

    find(name: string): TravelClub | null{
        return this.clubStorage.getClub(name);
    }

    findAll(): TravelClub[]{
        return this.clubStorage.getAllClubs();
    }
}
export default ClubCoordinator;