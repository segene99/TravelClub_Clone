import { question } from "readline-sync";
import TravelClub from "../../../step1/TravelClub";
import ClubCoordinator from "../../logic/ClubCoordinator"

class ClubWindow {
    clubCoordinator: ClubCoordinator

    constructor(clubCoordinator: ClubCoordinator) {
        this.clubCoordinator = clubCoordinator;
    }

    register(): TravelClub | null {
        let newClub = null;
        while(true){
            const clubName = question(('\n enter club name(0. go back to club menu): '));
            if(clubName === '0'){
                break;
            }
            if (this.clubCoordinator.exist(clubName)) {
                console.log('\n> club name already exists. --> ' + clubName);
                continue;
            }
            const intro = question(' enter club intro(0. go back to club menu): ');
            if(intro === '0'){
                break;
            }

            const newClub = new TravelClub(clubName, intro);
            if(this.clubCoordinator.register(newClub)){
                console.log('registration success: ' + newClub.name + ', ' + newClub.intro + ',' + newClub.foundedDate);
                break;
            } else {
                console.log('registration fail: ' + newClub)
                return null;
            }
        }
        return newClub;

    }
    find(): TravelClub | null {
        let clubFounded = null;
        if(!this.clubCoordinator.hasClubs()){
            console.log('No clubs existing');
            return null;
        }
        while(true){
            const clubName = question('enter the club to find(0. go back to club menu):')
            if(clubName === '0'){
                return null;
            }
            clubFounded = this.clubCoordinator.exist(clubName);
            if (clubFounded != null) {
                console.log('\n> club founded' + clubFounded);
                break;
            } else {
                console.log('\n> club not founded for ' + clubFounded);
                continue;
            }
        }
        return clubFounded;
    }
    modify(): TravelClub | null {
        let newClub = null;

        if(!this.clubCoordinator.hasClubs()){
            console.log('No clubs existing');
            return null;
        }
        while(true){
            const clubName = question('enter the club to find(0. go back to club menu): ')
            if(clubName === '0'){
                return null;
            }
            const targetClub = this.clubCoordinator.exist(clubName);
            if (targetClub != null) {
                console.log('\n> club founded' + targetClub);
            }else{
                console.log('\n> club not founded for ' + targetClub);
                continue;
            }

            const clubInput = question('enter new club name(Enter. no change / 0. go back to club menu): ');
            let newClubName = clubInput;
            if (newClubName === '0') {
                break;
            }

            if (this.clubCoordinator.exist(newClubName)?.name === newClubName) {
                console.log('\n> Club already exists with name --> ' + newClubName);
                continue;
            }

            if (!newClubName.length && targetClub != null) {
                newClubName = targetClub.name;
            }
             const introInput = question(' enter new club intro(Enter. no change / 0. go back to club menu): ');
             let newIntro = introInput;
             if (newIntro === '0') {
                break;
            }
            if (!newIntro.length) {
                newIntro = targetClub.intro;
            }
            
            try {
                targetClub.name = newClubName;
                targetClub.intro = newIntro;
        
                this.clubCoordinator.modify(newClubName, newIntro);
                console.log('\n> Club changed: ', targetClub);
                return targetClub;
            }
            catch (e) {
                console.error(`Error: ${(e as Error).message}`);
            }
        }
        return null;
    }
    remove(): void {
        if(!this.clubCoordinator.hasClubs()){
            console.log('No clubs existing');
            return;
        }
        while(true){
            const clubName = question('\n club name to find (0.Club Menu): ');
            if (clubName === '0') {
                return;
            }

            const targetClub = this.clubCoordinator.exist(clubName);

            if (targetClub != null) {
                console.log('\n> club founded' + targetClub);
            }else{
                console.log('\n> club not founded for ' + targetClub);
                continue;
            }
            
            const confirmRemoveal = question('Do you want to remove this club? (1:yes, 2:no, 0.Club Menu): ');
            const confirmNum = parseInt(confirmRemoveal);
            if (confirmNum === 0) {
                return;
            }
            if(confirmNum === 1){
                if(this.clubCoordinator.remove(targetClub)){
                    console.log('removal complete');
                    return;
                } else{
                    console.log('removal failed');
                    return;
                }
              } else if (confirmNum === 2){
                return;
              }
        }
       
    }

    
}
export default ClubWindow