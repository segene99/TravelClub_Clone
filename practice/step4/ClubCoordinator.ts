import ClubStorage from './ClubStorage';

class ClubCoordinator{
    
    clubStorage: ClubStorage;

    constructor(){
        this.clubStorage = new ClubStorage();
    }

    register(name: string, intro: string): boolean{
        return this.clubStorage.push(name, intro);
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