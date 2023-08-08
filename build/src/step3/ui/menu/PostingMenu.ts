import { question } from "readline-sync";
import PostingConsole from "../console/PostingConsole";

class PostingMenu{

    postingConsole: PostingConsole
    
    constructor(){
        this.postingConsole = new PostingConsole;
    }

  showMenu() {
    let inputNum = 0;
    this.displayMenu();
    inputNum = this.selectMenu();

    switch(inputNum){

        case 1:
            this.postingConsole.findBoard();
            break;
        case 2:
            this.postingConsole.register();
            break;
        case 3:
            this.postingConsole.find();
            break;    
        case 4:
            this.postingConsole.findAll();
            break;    
        case 5:
            this.postingConsole.modify();
            break;    
        case 6:
            this.postingConsole.remove();
            break;    
        case 0:
            return; 
        default:
            console.log('choose again')        
}
    
   
  }
    displayMenu(): void {
        const currentBoard = this.postingConsole.hasCurrentBoard();
        if(currentBoard){
            console.log(' Posting menu for[' + currentBoard + ']');
        }else {
            console.log(' [Posting Menu]');
          }
          console.log('......................');
          console.log(' 1. Find a board');
          console.log(' 2. Register a posting');
          console.log(' 3. Find a posting');
          console.log(' 4. Find postings in the board');
          console.log(' 5. Modify a posting');
          console.log(' 6. Remove a posting');
          console.log('......................');
          console.log(' 0. Previous');
          console.log('......................');
    }
    selectMenu(): number {
        const answer = question('Select number : ');
         const menuNumber = parseInt(answer);

      if (menuNumber >= 0 && menuNumber <= 6) {
        return menuNumber;
      }
      else {
        console.log('it\'s a invalid number -> ' + menuNumber);
        return -1;
      }
    }



}
export default PostingMenu