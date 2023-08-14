import MapStores from "../map/MapStores";
import BoardService from "../service/BoardService";
import BoardDto from "../service/dto/BoardDto";
import BoardStore from "../store/BoardStore";
import ClubStore from "../store/ClubStore";

class BoardServiceLogic implements BoardService{

    boardStore: BoardStore
    clubStore:  ClubStore;


    constructor(){
        this.boardStore = MapStores.getInstance().requestBoardStore();
        this.clubStore = MapStores.getInstance().requestClubStore();
    }
    remove(clubId: string): void {
        const foundBoard = this.boardStore.retrieveBoard(clubId);

        if (!foundBoard) {
          throw new Error('No such board with id --> ' + clubId);
        }
        this.boardStore.delete(clubId);
    }
    modify(boardDto: BoardDto): void {
      const boardId = boardDto.clubId;
      const targetBoard = this.boardStore.retrieveBoard(boardId);

      if (!targetBoard) {
        throw new Error('No such board with id --> ' + boardDto.clubId);
      }

      if (boardDto.boardName) {
        targetBoard.boardName = boardDto.boardName;
      }

      if (boardDto.adminEmail) {
        targetBoard.adminEmail = boardDto.adminEmail;
      }

      const foundClub = this.clubStore.retrieveByUsId(boardDto.clubId);

      if (!foundClub) {
        throw new Error('No such club with id --> ' + boardDto.clubId);
      }

      const membership = foundClub.getMembershipBy(boardDto.adminEmail);

      if (!membership) {
        throw new Error('In the club, No such member with admin\'s email --> ' + boardDto.adminEmail);
      }

      this.boardStore.update(boardDto.toBoard());
    }
    findBoardByClubName(clubName: string): BoardDto | null {
        const foundClub = this.clubStore.retrieveByName(clubName);

        if (!foundClub) {
            throw new Error('No such club with name: ' + clubName);
        }

        const board = this.boardStore.retrieveBoard(foundClub.getId());

        return board ? BoardDto.toBoardDTO(board) : null;

    }
    
    findAllBoards(): BoardDto[] {
        const boardList = this.boardStore.findAllBoards();  
        return boardList.map(board => BoardDto.toBoardDTO(board));
    }
    findBoardByBoardName(boardName: string): BoardDto[] {
        const boardList = this.boardStore.retrieveByName(boardName);
        if (!boardList.length) {
            throw new Error('No such board with name --> ' + boardName);
          }
          return boardList.map(board => BoardDto.toBoardDTO(board));
    }

    register(newBoardDto: BoardDto): string {
      const boardId = newBoardDto.clubId;
      const targetBoard = this.boardStore.retrieveBoard(boardId);

      if (targetBoard) {
        throw new Error('Board already exists in the club --> ' + targetBoard.boardName);
      }

      const clubFound = this.clubStore.retrieveByUsId(boardId);

      if (!clubFound) {
        throw new Error('No such club with id: ' + boardId);
      }

      const adminEmail = clubFound.getMembershipBy(newBoardDto.adminEmail);

      if (!adminEmail) {
        throw new Error('In the club, No such member with admin\'s email --> ' + newBoardDto.adminEmail);
      }
      return this.boardStore.create(newBoardDto.toBoard());
    }


}
export default BoardServiceLogic