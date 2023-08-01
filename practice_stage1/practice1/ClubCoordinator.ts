import ClubStorage from "./ClubStorage"
import TravelClub from "./TravelClub";

class ClubCoordinator{
    
    clubStorage: ClubStorage

    constructor(){
        this.clubStorage = new ClubStorage();
    }

    exitProgram(): void{
        console.log('bye bye')
        process.exit(0);
    }

    findAll(): TravelClub[]{
        return this.clubStorage.findAll();
    }

    find(clubName: string): TravelClub | undefined{
        return this.clubStorage.find(clubName);
    }

    exist(clubName: string): boolean{
        return this.clubStorage.exist(clubName);
    }

    hasClubs(): boolean{
        return this.clubStorage.hasClubs();
    }

    register(newClub: TravelClub): number{
        return this.clubStorage.register(newClub);
    }


}
export default ClubCoordinator