import { question } from "readline-sync";
import ClubConsole from "../console/ClubConsole";
import MembershipMenu from "./MembershipMenu";

class ClubMenu{
    
    clubConsole: ClubConsole
    membershipMenu: MembershipMenu;

    constructor(){
        this.clubConsole = new ClubConsole();
        this.membershipMenu = new MembershipMenu();
    }
    
    
    showMenu() {
        //13. 클럽메뉴의 세부 선택값을 담을 inputNumber 선언
      let inputNumber = 0;

      while (true) {
        //14. 메뉴 출력을 위해 호출
        this.displayMainMenu();
        inputNumber = this.selectMenu();

        switch (inputNumber) {
          //15. register -> find -> modify -> remove -> showMenu 순으로 진행해볼게
          case 1:
            //16. 클럽등록을 위해 호출
            this.clubConsole.register();
            break;
          case 2:
            //16. 클럽찾기를 위해 호출
            this.clubConsole.find();
            break;
          case 3:
            this.clubConsole.modify();
            break;
          case 4:
            this.clubConsole.remove();
            break;
          case 5:
            this.membershipMenu.showMenu();
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
      console.log(' [Travel Club Menu]');
      console.log('......................');
      console.log(' 1. Register');
      console.log(' 2. Find');
      console.log(' 3. Modify');
      console.log(' 4. Remove');
      console.log('......................');
      console.log(' 5. Membership Menu');
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
export default ClubMenu