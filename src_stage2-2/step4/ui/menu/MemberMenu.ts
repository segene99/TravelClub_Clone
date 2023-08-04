import { question } from "readline-sync";
import ClubCoordinator from "../../logic/ClubCoordinator";
import MemberWindow from "../window/MemberWindow";
import TravelClub from "../../../step1/TravelClub";

class MemberMenu{

    memberWindow: MemberWindow

    constructor(clubCoordinator: ClubCoordinator){

        this.memberWindow = new MemberWindow(clubCoordinator);

    }

    showMenu(currentClub: TravelClub | null): void {
        let inputNum = 0;
        if (!currentClub) {
          console.log('\n> club not selected');
          return;
        }
        this.memberWindow.currentClub = currentClub;
        console.log('\n> current club info')
        console.log('\n>', currentClub);
        while(true){

            this.displayMemberMenu();
            inputNum = this.selectMemberMenu();

            switch(inputNum){
                case 1:
                    this.memberWindow.findClub();
                    break;
                case 2:
                    this.memberWindow.addMember();
                    break;
                case 3:
                    this.memberWindow.findMember();
                    break;
                case 4:
                    this.memberWindow.modifyMember();
                    break;
                case 5:
                    this.memberWindow.removeMember();
                    break;
                case 0:
                    return;
                default:
                    console.log('choose again');
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
        console.log(' 0. Previous');
        console.log('......................');
      }
  
      selectMemberMenu(): number {
        const input = question('enter the number on the menu');
        const menuNum = parseInt(input);
        if(menuNum >= 0|| menuNum <= 6){
            return menuNum;
        } else {
            console.log('Invalid input');
            return -1;
        }
    }
    exitProgram(): void {
        console.log('Bye')
        process.exit(0);
    }


}
export default MemberMenu