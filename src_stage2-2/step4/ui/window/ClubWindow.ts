import TravelClub from "../../../step1/TravelClub";
import ClubCoordinator from "../../logic/ClubCoordinator"
import { question } from "readline-sync";

class ClubWindow{
    clubCoordinator: ClubCoordinator

    constructor(clubCoordinator: ClubCoordinator){
        this.clubCoordinator = clubCoordinator;
    }

    register(): TravelClub | null {
        let newClub = null;
        while(true){
            const clubName = question('enter the name(0, menu로)');
            if(!clubName || clubName === '0'){
                break;
            }
            if(this.clubCoordinator.exist(clubName)){
                console.log('already exsiting club')
                continue;
            }

            const intro = question('enter club intro(0. menu로');

            if(!intro || intro === '0'){
                break;
            }
            try{
                newClub = new TravelClub(clubName, intro);
                this.clubCoordinator.register(newClub)
                console.log('reagistered club: ', newClub);
            }
            catch(e){
                console.log(`Error: ${(e as Error).message}`);
            }

        }
        return newClub;
    }
    find(): TravelClub | null  {
        let clubFound  = null;
        if(!this.clubCoordinator.hasClubs()){
            console.log('no clubs in the storage');
            return null;
        }
        while(true){
            const clubName = question('enter club name(0. go back');
            if(clubName === '0'){
                break;
            }
            if(this.clubCoordinator.exist(clubName)){
                clubFound = this.clubCoordinator.find(clubName);
                console.log('club found: ', clubFound);
            } else {
                console.log('no such club in storage');
            }
        }
        return clubFound;
    }



    modify(): TravelClub | null  {

        const targetClub = this.findOne();

        if(!targetClub){return targetClub};
        let newIntro = question('enter new intro(0. back to main menu)');
        if(newIntro === '0'){ return targetClub};
        if(!newIntro){newIntro = targetClub.intro;};
        try{
            this.clubCoordinator.modify(targetClub.name, newIntro);
            console.log('club Changed: ', targetClub);
        } catch(e){
            console.error(`Error: ${(e as Error).message}`);
        }
        return targetClub;

    }
    findOne(): TravelClub | null {
        let clubFound =  null;

        if(!this.clubCoordinator.hasClubs()){
            console.log('no clubs in the storage');
            return null;
        }
        while (true) {
            const clubName = question('\n club name to find (0.Club menu): ');
            if (clubName === '0') {
              break;
            }
            if(this.clubCoordinator.exist(clubName)){
                clubFound = this.clubCoordinator.find(clubName);
                console.log('club found: ', clubFound);
                break;
            } else {
                console.log('no such club in storage');
            }
            clubFound = null;
          }
          return clubFound;

    }
    remove(): void {
        let clubFound =  null;
        if(!this.clubCoordinator.hasClubs()){
            console.log('no clubs in the storage');
            return;
        }
        const clubName = question('\n club name to remove (0.Club menu): ');
        if (clubName === '0') {
            return;
        }
        if(this.clubCoordinator.exist(clubName)){
            clubFound = this.clubCoordinator.find(clubName);
            console.log('club found: ', clubFound);
        } else {
            console.log('no such club in storage');
        }

        const input = question('\n do you want to remove?(1. yes, 2. no): ');
        const answer = parseInt(input);
        if(answer === 1){
            this.clubCoordinator.remove(clubFound);
        } else {
            console.log('removal failed. club remained: ' + clubFound);
        }

    }




}
export default ClubWindow