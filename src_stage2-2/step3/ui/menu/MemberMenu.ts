import { question } from "readline-sync";
import TravelClub from "../../../step1/TravelClub";
import ClubCoordinator from "../../logic/ClubCoordinator"
import MemberWindow from "../window/MemberWindow";

class MemberMenu {
  

    memberWindow: MemberWindow

    constructor(clubCoordinator: ClubCoordinator){
        this.memberWindow = new MemberWindow(clubCoordinator)
    }

    showMenu(currentClub: TravelClub | null): void {
        let inputNum = 0;
        if(!currentClub){
            console.log('\n Club not selected')
        }
        this.memberWindow.currentClub = currentClub;
        console.log('\n>'+ currentClub);
        
    
        while (true) {
            this.displayMemberMenu();
            inputNum = this.selectMemberMenu();

            switch (inputNum) {
            case 1:
                this.memberWindow.findAnotherClub();
                break;
            case 2:
                this.memberWindow.add();
                break;
            case 3:
                this.memberWindow.find();
                break;
            case 4:
                this.memberWindow.modify();
                break;
            case 5:
                this.memberWindow.remove();
                break;
            case 6:
                return;
            case 0:
                this.exitProgram();
                break;
            default:
                console.log('Choose Again!');
            }
        }
    }

    displayMemberMenu(): void {
        console.log('......................');
        console.log('[Members Menu]');
        console.log('......................');
        console.log(' 1. Find a club');
        console.log(' 2. Add member');
        console.log(' 3. Find a member');
        console.log(' 4. Modify a member');
        console.log(' 5. Remove a member');
        console.log('......................');
        console.log(' 6. return to Club menu');
        console.log(' 0. Previous');
        console.log('......................');
      }
  
      selectMemberMenu(): number {
        const answer = question('Select number : ');
        const menuNumber = parseInt(answer);
  
        if (menuNumber >= 0 && menuNumber <= 5) {
          return menuNumber;
        }
        else {
            console.log('Invalid input: ' + menuNumber);
            return -1;
        }
      }
      exitProgram(): void {
        console.log('Bye')
        process.exit(0);
    }

}
export default MemberMenu