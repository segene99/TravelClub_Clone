import { question } from "readline-sync";
import ServiceLogics from "../../logic/ServiceLogics";
import BoardService from "../../service/BoardService";
import ClubService from "../../service/ClubService";
import ClubDto from "../../service/dto/ClubDto";
import SocialBoard from "../../entity/board/SocialBoard";
import BoardDto from "../../service/dto/BoardDto";
import BoardView from "../view/BoardView";

class BoardConsole{

    boardService: BoardService
    clubService: ClubService

    constructor(){
        this.boardService = ServiceLogics.shareInstance().createBoardService();
        this.clubService = ServiceLogics.shareInstance().createClubService();
    }
    findClub(): ClubDto | null {
        let clubFound = null;
        while (true) {
            const clubName = question('enter club name(0. go back): ');
    
            if (clubName === '0') {
              break;
            }
    
            try {
              clubFound = this.clubService.findByName(clubName);
              console.log('\n> Found club: ', clubFound);
            }
            catch (e) {
              if(e instanceof Error) {
                console.error(`Error: ${e.message}`);
              }
            }
          }
          return clubFound;
    }
    registerBoard(): void {
        const targetClub = this.findClub();
        if (!targetClub) {
            return;
          }
    
          const boardName = question('\n Board name to register (0.Board menu): ');
    
          if (boardName === '0') {
            return;
          }
          const adminEmail = question(' Admin member\'s email: ');
          const newBoard = new SocialBoard(targetClub.usid, boardName, adminEmail);

        try {
            const newBoardDto = new BoardDto(newBoard.clubId, newBoard.boardName, newBoard.adminEmail);
    
            this.boardService.register(newBoardDto);
            console.log('\n> Registered board: ', newBoardDto);
          }
          catch (e) {
            if(e instanceof Error) {
              console.error(`Error: ${e.message}`);
            }
        }
    }
    findBoardByBoardName(): void {
        const boardName = question('\n Board name to find (0.Board menu): ');

      if (boardName === '0') {
        return;
      }

      try {
        const boardDtos = this.boardService.findBoardByBoardName(boardName);
        let index = 0;

        for (const boardDto of boardDtos) {
          console.log(`\n [${index}]`, boardDto);
          index++;
        }
       } catch (e) {
            if(e instanceof Error) {
              console.error(`Error: ${e.message}`);
            }
        }
    }
    findAllBoards(): void {
        let boardList = this.boardService.findAllBoards();
        let inputNumber = 0;
        console.clear();
        console.log('......................');
        console.log(' Board List ==>');
        boardList.forEach((board, index) => {
            let menuNumber = index + 1;
            console.log(`   ${menuNumber}. ${board.boardName}`);
        });
        console.log('......................');
        console.log(' 0. Previous');
        console.log('......................');
        inputNumber = this.selectBoardNumber(boardList.length);

        if (inputNumber == 0) {
            return;
          }
    
          let selectBoard = boardList[inputNumber - 1];
          let boardView = new BoardView(selectBoard);
          boardView.showMenu();
    }
    selectBoardNumber(totalNumOfBoard: number): number {
        const answer = question('Select Board number : ');
        const boardNumber = parseInt(answer);
        if (boardNumber >= 0 && boardNumber <= totalNumOfBoard) {
          return boardNumber;
        }
        else {
          console.log('it\'s a invalid number -> ' + boardNumber);
          return -1;
        }    
    }
    findBoardByClubName(): BoardDto | null{
        let boardFound = null;

        while (true) {
            const clubName = question('\n club name to find a board (0.Board menu): ');

            if (clubName === '0') {
            break;
            }

            try {
            boardFound = this.boardService.findBoardByClubName(clubName);
            console.log('\n> Found club: ', boardFound);
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
    modifyBoard(): void {
        const targetBoard = this.findBoardByClubName();

      if (!targetBoard) {
        return;
      }

      const newBoardName = question('\n new board name to modify (0.Board menu, Enter. no change): ');
      if (newBoardName === '0') {
        return;
      }
      targetBoard.boardName = newBoardName;

      const newAdminEmail = question('\n new admin member\'s email (Enter. no change): ');
      targetBoard.adminEmail = newAdminEmail;

      try {
        this.boardService.modify(targetBoard);
        console.log('\n> Modified member: ', targetBoard);
      }
      catch (e) {
        if(e instanceof Error) {
          console.error(`Error: ${e.message}`);
        }
      }

    }
    removeBoard(): void {
        const targetBoard = this.findBoardByClubName();

      if (!targetBoard) {
        return;
      }

      const confirmStr = question('Remove this board? (Y:yes, N:no): ');

      if (confirmStr.toLowerCase() === 'y' || confirmStr.toLowerCase() === 'yes') {
        //
        console.log('\n> Removing a board --> ' + targetBoard.boardName);
        this.boardService.remove(targetBoard.clubId);
      }
      else {
        console.log('\n> Remove cancelled, your board is safe. -->' + targetBoard.boardName);
      }
    }

}
export default BoardConsole