import { question } from "readline-sync";
import TravelClub from "../../../step1/TravelClub";
import ClubCoordinator from "../../logic/ClubCoordinator";
import ClubWindow from "../window/ClubWindow";
import MemberMenu from "./MemberMenu";

class ClubMenu {
    currentClub: TravelClub | null = null;
    clubWindow: ClubWindow
    memberMenu: MemberMenu

    constructor(){
        const clubCoordinator = new ClubCoordinator();
        this.clubWindow = new ClubWindow(clubCoordinator);
        this.memberMenu = new MemberMenu(clubCoordinator);
        
    }


    showMenu() {
        let inputNum = 0;
        while(true){
            this.displayMainMenu();
            inputNum = this.selectMainMenu();
            switch (inputNum) {
                //메뉴 option
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
                  console.log('Choose Again!');
              }


        }
    }
    displayMainMenu(): void {
        //
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
        const answer = question('Select number : ');
        const menuNumber = parseInt(answer);
  
        if (menuNumber >= 0 && menuNumber <= 5) {
          return menuNumber;
        }
        else {
          console.log('It\'s a invalid number -> ' + menuNumber);
          return -1;
        }
      }
  
      exitProgram(): void {
        console.log('Program exit. Bye....');
        process.exit(0);
      }
    }
export default ClubMenu