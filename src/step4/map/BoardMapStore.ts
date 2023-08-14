import SocialBoard from "../entity/board/SocialBoard";
import BoardDto from "../service/dto/BoardDto";
import BoardStore from "../store/BoardStore";
import MapStorage from "./storage/MapStorage";

class BoardMapStore implements BoardStore{

    boardMap: Map<string, SocialBoard>;

    constructor(){
        this.boardMap = MapStorage.getInstance().boardMap;
    }
    delete(clubId: string): void {
        this.boardMap.delete(clubId);
    }
    update(board: SocialBoard): void {
        this.boardMap.set(board.getId(), board);
    }
    findAllBoards(): SocialBoard[] {
        const boardList = Array.from(this.boardMap.values());
        return boardList;
    }
    retrieveByName(boardName: string): SocialBoard[] {
        const boardList = Array.from(this.boardMap.values());
        
        if(!boardList){
            console.log('board not found under the name you provided')
        }

        return boardList.filter(board => board.boardName === boardName);
    }
    create(board: SocialBoard): string {
        if(this.retrieveBoard(board.getId()) !== null){
            throw new Error('\n> Member already exists with id: ' + board.getId());
        }else{
            this.boardMap.set(board.getId(), board)
        }
        return board.getId();
    }

    retrieveBoard(boardId: string): SocialBoard | null {
        return this.boardMap.get(boardId) || null;
    }

}
export default BoardMapStore
