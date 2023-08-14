import SocialBoard from "../entity/board/SocialBoard";
import BoardDto from "../service/dto/BoardDto";

interface BoardStore{
    delete(clubId: string): void;
    update(board: SocialBoard): void;
    findAllBoards(): SocialBoard[];
    retrieveByName(boardName: string): SocialBoard[];
    create(board: SocialBoard): string;
    retrieveBoard(boardId: string): SocialBoard | null;

}
export default BoardStore