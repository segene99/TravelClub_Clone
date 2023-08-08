import BoardDTO from "./dto/BoardDTO";

interface BoardService{
    findByName(boardName: string): (BoardDTO | null)[] ;
    remove(clubid: string): void;
    modify(targetBoard: BoardDTO | null): void;
    findByClubName(clubName: string): BoardDTO | null;
    register(newBoard: BoardDTO): void;

}
export default BoardService