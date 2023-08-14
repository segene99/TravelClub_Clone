import { question } from "readline-sync";
import BoardMenu from "./BoardMenu";
import ClubMenu from "./ClubMenu";
import MemberMenu from "./MemberMenu";

class MainMenu{
   
    clubMenu: ClubMenu
    memberMenu: MemberMenu
    boardMenu: BoardMenu
   
    constructor(){
        this.boardMenu = new BoardMenu();
        this.clubMenu = new ClubMenu();
        this.memberMenu = new MemberMenu();

    }

    showMenu(): void {
        let inputNum = 0;
        this.displayMainMenu();
        inputNum = this.selectMainMenu();
        
        switch(inputNum){
           //11. clubmenu -> membermenu -> boardmenu -> exitprogram 순으로 전개
           case 1:
            //12. 클럽메뉴 호출
            this.clubMenu.showMenu();
            break;
          case 2:
            //13. 멤버메뉴 호출
            this.memberMenu.showMenu();
            break;
          case 3:
            //14. 게시판메뉴 호출
            this.boardMenu.showMenu();
            break;
          case 0:
            this.exitProgram();
          default:
            console.log('Choose Again!');
        }


    }
    displayMainMenu() {
        console.log('......................');
        console.log(' [Main Menu] ');
        console.log('......................');
        console.log(' 1. Club Menu');
        console.log(' 2. Member Menu');
        console.log(' 3. Board Menu');
        console.log('......................');
        console.log(' 0. Exit Program');
        console.log('......................');
    }
    selectMainMenu(): number {
        const input = question('choose the valid number on the menu');
        const inputNum = parseInt(input);
        if(inputNum>= 0 && inputNum <=3){
            return inputNum;
        } else {
            console.log('enter valid number');
            return -1;
        }
    }
    exitProgram(): void {
        console.log('Program exit. Bye...');
        process.exit(0);
      }

}
export default MainMenu