import { question } from "readline-sync";
import ClubCoordinator from "../../logic/ClubCoordinator";
import ClubWindow from "../window/ClubWindow";
import MemberMenu from "./MemberMenu";
import TravelClub from "../../../step1/TravelClub";

class ClubMenu{

    clubWindow: ClubWindow
    memberMenu: MemberMenu
    currentClub: TravelClub | null;

    constructor(){

        const clubCoordinator = new ClubCoordinator();

        this.clubWindow = new ClubWindow(clubCoordinator);
        this.memberMenu = new MemberMenu(clubCoordinator);
        this.currentClub = null;
    }


    showMenu() {
        let inputNumber = 0;

        while(true){
            this.displayMainMenu();
            inputNumber = this.selectMainMenu();

            switch(inputNumber){
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
                    this.exitProgram();

                default:
                    console.log('choose again');


            }


        }

    }
    displayMainMenu() {
        console.log('......................');
        console.log('[Travel Club Menu]');
        console.log('......................');
        console.log(' 1. Register');
        console.log(' 2. Find');
        console.log(' 3. Modify');
        console.log(' 4. Remove');
        console.log('......................');
        console.log(' 5. Member Menu');
        console.log('......................');
        console.log(' 0. Exit program');
        console.log('......................');
    }
    selectMainMenu(): number {
        const numInput = question('Select number: ');
      const menuNum = parseInt(numInput);

      if (menuNum >= 0 && menuNum <= 5) {
        return menuNum;
      }
      else {
        console.log('Invalid number enteered ' + menuNum);
        return -1;
      }


    }
    exitProgram() {
        console.log('exit')
        process.exit(0);
    }

    

}
export default ClubMenu