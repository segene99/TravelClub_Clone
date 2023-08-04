import { question } from "readline-sync";
import TravelClub from "../../../step1/TravelClub";
import ClubCoodinator from "../../logic/ClubCoordinator";
import ClubWindow from "../window/ClubWindow";
import MemberMenu from "./MemberMenu"

class ClubMenu {

    memberMenu: MemberMenu
    clubWindow: ClubWindow
    currentClub: TravelClub | null = null;

    constructor() {
        const clubCoordinator = new ClubCoodinator();
        this.clubWindow = new ClubWindow(clubCoordinator)
        this.memberMenu = new MemberMenu(clubCoordinator);
    }

    showMenu() {
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
                    this.clubWindow.findAll();
                    break;
                case 4:
                    this.currentClub = this.clubWindow.modify();
                    break;
                case 5:
                    this.clubWindow.remove();
                    break;
                case 6:
                    this.memberMenu.showMenu(this.currentClub);
                    break;
                case 0:
                    this.exitProgram();
                    break;
                default:
                    console.log('try again');

            }
        }
    }
    displayMainMenu() {
        console.log('......................');
        console.log('[Travel Club Menu]');
        console.log('......................');
        console.log(' 1. Register');
        console.log(' 2. Find');
        console.log(' 3. FindAll');
        console.log(' 4. Modify');
        console.log(' 5. Remove');
        console.log('......................');
        console.log(' 6. Member Menu');
        console.log('......................');
        console.log(' 0. Exit program');
        console.log('......................');
    }
    selectMainMenu(): number {
        const input = question('enter the number on the menu: ');
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
export default ClubMenu