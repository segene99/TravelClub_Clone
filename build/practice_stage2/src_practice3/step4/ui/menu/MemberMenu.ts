import { question } from "readline-sync";
import TravelClub from "../../entity/TravelClub";
import ClubCoordinator from "../../logic/ClubCoordinator"
import MemberWindow from "../window/MemberWindow"

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
        console.log('\n> selected club: ' + currentClub);
        console.log('\n>', currentClub);
        
        while(true){
            this.displayMainMenu();
            inputNum = this.selectMainMenu();
            switch(inputNum){
                case 1:
                    this.memberWindow.findClub();
                    break;
                case 2:
                    this.memberWindow.register();
                    break;
                case 3:
                    this.memberWindow.search();
                    break;
                case 4:
                    this.memberWindow.modify();
                    break;
                case 5:
                    this.memberWindow.remove();
                    break;
                case 0:
                    return;
                default:
                    return;
            }
        }

    }

    displayMainMenu() {
        console.log('---------------------');
        console.log('---[Member menu]-----');
        console.log('---1. find a club----');
        console.log('---2. add member-----');
        console.log('---3. search member--');
        console.log('---4. modify member---');
        console.log('---5. remove member--');
        console.log('---------------------');
        console.log('---0. go back to main-');
        console.log('---------------------');      
    }
    selectMainMenu(): number {
        const inputNumber = question('enter the number on the club menu');
        const answer = parseInt(inputNumber);

        if(answer >= 0 || answer <=5){
            return answer;
        } else{
            console.log('enter the valid digit number on the menu')
        }

        return -1;
    }
}
export default MemberMenu