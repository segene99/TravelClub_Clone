import { question } from "readline-sync";
import ClubCoordinator from "../../logic/ClubCoordinator";
import ClubWindow from "../window/ClubWindow";
import MemberMenu from "./MemberMenu";
import TravelClub from "../../entity/TravelClub";

class ClubMenu {

    clubWindow: ClubWindow
    memberMenu: MemberMenu
    currentClub: TravelClub | null;

    constructor() {
        const clubCoordinator = new ClubCoordinator();

        this.clubWindow = new ClubWindow(clubCoordinator);
        this.memberMenu = new MemberMenu(clubCoordinator);
        this.currentClub = null;

    }

    showMenu(): void {
        let inputNum = 0;
        while(true){
            this.displayMainMenu();
            inputNum = this.selectMainMenu();
            switch(inputNum){
                case 1:
                    this.currentClub = this.clubWindow.register();
                    break;
                case 2:
                    this.currentClub = this.clubWindow.find();
                    break;
                case 3:
                    this.currentClub = this.clubWindow.modify();
                    break;
                case 4:
                    this.clubWindow.remove();
                    break;
                case 5:
                    this.memberMenu.showMenu(this.currentClub);
                    break;
                case 0:
                    this.exit();
                default:
                    return;
            }
        }

    }
    exit(): void {
        console.log('bye');
        process.exit(0);
    }
    displayMainMenu() {
        console.log('---------------------');
        console.log('---[Travel Club]-----');
        console.log('---1. register-------');
        console.log('---2. find-----------');
        console.log('---3. modify---------');
        console.log('---4. remove---------');
        console.log('---------------------');
        console.log('---5. To Member menu-');
        console.log('---------------------');
        console.log('---0. exit program---');
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
export default ClubMenu