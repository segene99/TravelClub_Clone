import { question } from 'readline-sync';
import BoardConsole from '../console/BoardConsole';
// import PostingMenu from './PostingMenu';


class BoardMenu {
    //
    boardConsole: BoardConsole;
    // postingMenu: PostingMenu;

    constructor() {
      //
      this.boardConsole = new BoardConsole();
      // this.postingMenu = new PostingMenu();
    }

    showMenu(): void {
      //
      let inputNumber = 0;

      while (true) {
        //
        this.displayMainMenu();
        inputNumber = this.selectMenu();

        switch (inputNumber) {
          //
          case 1:
            this.boardConsole.registerBoard();
            break;
          case 2:
            this.boardConsole.findAllBoards();
            break;
            
          case 3:
            this.boardConsole.findBoardByBoardName();
            break;
           
          case 4:
            this.boardConsole.modifyBoard();
            break;
           
          case 5:
            this.boardConsole.removeBoard();
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
      console.clear();
      console.log('......................');
      console.log(' [Board Menu] ');
      console.log('......................');
      console.log(' 1. Register a board');
      console.log(' 2. Find all boards');
      console.log(' 3. Find boards by name');
      console.log(' 4. Modify a board');
      console.log(' 5. Remove a board');
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
export default BoardMenu;
