import BoardDto from "./dto/BoardDto";

interface BoardService{
    remove(clubId: string): void;
    modify(targetBoard: BoardDto): void;
    findBoardByClubName(clubName: string): BoardDto | null;
    findAllBoards(): BoardDto[];
    findBoardByBoardName(boardName: string): BoardDto[];
    register(newBoardDto: BoardDto): void;

}
export default BoardService