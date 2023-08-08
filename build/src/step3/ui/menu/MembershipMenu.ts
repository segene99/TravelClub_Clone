import { question } from "readline-sync";
import MembershipConsole from "../console/MembershipConsole";

class MembershipMenu{

    membershipConsole: MembershipConsole

    constructor(){
        this.membershipConsole = new MembershipConsole();
    }

    showMenu() {
        let inputNumber = 0;

        while (true) {
          //
          this.displayMainMenu();
          inputNumber = this.selectMenu();
  
          switch (inputNumber) {
            //
            case 1:
              this.membershipConsole.findClub();
              break;
            case 2:
              this.membershipConsole.add();
              break;
            case 3:
              this.membershipConsole.find();
              break;
            case 4:
              this.membershipConsole.modify();
              break;
            case 5:
              this.membershipConsole.remove();
              break;
            case 0:
              return;
  
            default:
              console.log('Choose Again!');
          }
        }
      }
  
      displayMainMenu(): void {
        //
        console.log('......................');
        console.log('[Membership Menu]');
        console.log('......................');
        console.log(' 1. Find a club');
        console.log(' 2. Add a membership');
        console.log(' 3. Find a membership');
        console.log(' 4. Modify a membership');
        console.log(' 5. Remove a membership');
        console.log('......................');
        console.log(' 0. Previous');
        console.log('......................');
      }
  
      selectMenu(): number {
        //
        const answer = question('Select number : ');
        const menuNumber = parseInt(answer);
  
        if (menuNumber >= 0 && menuNumber <= 5) {
          return menuNumber;
        }
        else {
          console.log('it\'s a invalid number -> ' + menuNumber);
          return -1;
        }
      }
  
  }
  export default MembershipMenu;
  