import SocialBoard from "../../step1/entity/board/SocialBoard";
import TravelClub from "../../step1/entity/club/TravelClub";
import BoardService from "../service/BoardService";
import BoardDTO from "../service/dto/BoardDTO";
import ClubDTO from "../service/dto/ClubDTO";
import MapStorage from "./storage/MapStorage";

class BoardServiceLogic implements BoardService{

    boardMap: Map<string, SocialBoard>
    clubMap: Map<string, TravelClub>

    constructor(){
        this.boardMap = MapStorage.getInstance().boardMap;
        this.clubMap = MapStorage.getInstance().clubMap;
    }
    findByName(boardName: string): (BoardDTO | null)[] {
        const boards = Array.from(this.boardMap.values());

        if (!boards || !boards.length) {
          throw new Error('No boards in the storage');
        }
        //
        const boardDtos = boards.filter(board => board.clubName === boardName).map(board => BoardDTO.toBoardDTO(board));
  
        if (!boardDtos.length) {
          throw new Error('No such board with name --> ' + boardName);
        }
        return boardDtos;    
    }
    remove(clubid: string): void {
        if(!this.boardMap.get(clubid)){
            console.log('board not found');
        }
        this.boardMap.delete(clubid);
    }
    modify(targetBoard: BoardDTO | null): void {
        if(targetBoard !== null){
            const currentBoard = this.boardMap.get(targetBoard.clubName);
            
            if(currentBoard !== undefined){
                if (!targetBoard.clubName) {
                    targetBoard.clubName = currentBoard.clubName;
                  }
            
                  if (!targetBoard.adminEmail) {
                    targetBoard.adminEmail = currentBoard.adminEmail;
                  }
                const board = targetBoard.toSocialBoard();
                this.boardMap.set(currentBoard.clubName, board);
            }
        }
        }

    findByClubName(clubName: string): BoardDTO | null {
        const clubs = Array.from(this.clubMap.values());
        const club = clubs.find(club => clubName === club.name);
        
        if(!club){
            throw new Error('No such club with name: ' + clubName);
        }
        const boardFound = this.boardMap.get(club.usid);

        return BoardDTO.toBoardDTO(boardFound);

    }

    register(newBoard: BoardDTO): void {
        const targetBoard = this.boardMap.get(newBoard.clubid);
        if(targetBoard){
           throw new Error('board already exists in the club'); 
        }
        const clubFound = this.clubMap.get(newBoard.clubid);
        if(!clubFound){
            throw new Error('no club found'); 
         }
         
        const adminEmail = ClubDTO.toClubDTO(clubFound).getMembershipBy(newBoard.adminEmail);
        if(!adminEmail){
            throw new Error('no email found'); 
         }
         
         const board = newBoard.toSocialBoard();
         this.boardMap.set(newBoard.clubid, board);
    }





}
export default BoardServiceLogic