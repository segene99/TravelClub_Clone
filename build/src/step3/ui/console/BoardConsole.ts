import { question } from "readline-sync";
import ServiceLogicLycler from "../../logic/ServiceLogicLycler"
import BoardService from "../../service/BoardService"
import ClubDTO from "../../service/dto/ClubDTO";
import ClubService from "../../service/ClubService";
import BoardDTO from "../../service/dto/BoardDTO";


class BoardConsole{

    clubService: ClubService
    boardService: BoardService

    constructor(){
        this.clubService = ServiceLogicLycler.shareInstance().createClubService();
        this.boardService = ServiceLogicLycler.shareInstance().createBoardService();
    }

    register(): void {
        while(true){
            const targetClub = this.findClub();
            if(!targetClub){
                return;
            }
            const newName = question('enter new board name(0. go back)');
            if(newName === '0'){return;}
            const newAdminEmail = question('enter new admin email(0. go back)')
            if(newAdminEmail === '0'){return;}
            
            try {
                const newBoard = new BoardDTO(targetClub.usid, newName, newAdminEmail);

                this.boardService.register(newBoard);
                console.log('registration success')
            } catch (error) {
                if(error instanceof Error){
                    console.error(`Error: ${error.message}`);
                }
            }
         
            

        }
    }
    findClub(): ClubDTO | null{
        let clubFound = null;
        while(true){
            const name = question('enter the club name to find(0. go back)');
            if(name === '0'){return null;}
            if(!name){
                console.log('cannot be null')
                continue;
            }
            try {
                clubFound = this.clubService.findByName(name);
                console.log('club found', clubFound.name);
                break;
            } catch (error) {
                if(error instanceof Error){
                    console.error(`Error: ${error.message}`);
                }
            }
        }
        return clubFound;
    }
    findByName(): void {
        const boardName = question('\n enter the board name to find(0. go back): ');

      if (boardName === '0') {
        return;
      }

      try {
        const boardDtos = this.boardService.findByName(boardName);

        let index = 0;

        for (const boardDto of boardDtos) {
          console.log(`\n [${index}] `, boardDto);
          index++;
        }
      }
      catch (e) {
        if(e instanceof Error) {
          console.error(`Error: ${e.message}`);
        }
      }
    }
    findOne(): BoardDTO | null {
        //
        let boardFound = null;
  
        while (true) {
          //
          const clubName = question('\n club name to find a board (0.Board menu): ');
  
          if (clubName === '0') {
            break;
          }
  
          try {
            boardFound = this.boardService.findByClubName(clubName);
            if (boardFound) {
              console.log('\n> Found club: ', boardFound);
            }
            break;
          }
          catch (e) {
            if(e instanceof Error) {
              console.error(`Error: ${e.message}`);
            }
          }
        }
        return boardFound;
      }
    modify(): void {
        const targetBoard = this.findOne();
        if(!targetBoard){
            console.log('not found')
        }
        while(true){
            const newName = question('enter new board name(0. go back)')
            if(newName === '0'){return;}
            if(targetBoard !== null){
                targetBoard.clubName = newName;
            }
            const newAdminEmail = question('\n enter new admin email(0. go back): ');
            if(newAdminEmail === '0'){return;}
            if(targetBoard !== null){
                targetBoard.adminEmail = newAdminEmail;
            }
            try {
                this.boardService.modify(targetBoard);
                console.log('modification complete')
            } catch (error) {
                
            }

        }

    }
    remove(): void {
        const targetBoard = this.findOne();

      if (!targetBoard) {
        return;
      }

      const confirmation = question('are you sure? (1. yes / 2. not sure)');
      const confirmationNum = parseInt(confirmation);
      if(confirmationNum === 1){
          this.boardService.remove(targetBoard.clubid);
      }else{
          console.log('removal cancelled');
          return;
      }
    }




}
export default BoardConsole