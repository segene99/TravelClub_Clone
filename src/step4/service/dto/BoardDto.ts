import DateUtil from "../../../util/DateUtil";
import SocialBoard from "../../entity/board/SocialBoard";

class BoardDto {
    clubId: string = '';
    boardName: string = '';
    adminEmail: string = '';
    createDate: string = '';

    constructor(clubId: string, boardName: string, adminEmail: string) {
      //
      this.clubId = clubId;
      this.boardName = boardName;
      this.adminEmail = adminEmail;
      this.createDate = DateUtil.today();
    }

    static toBoardDTO(board: SocialBoard): BoardDto {
      //
      const boardDto = new BoardDto(board.clubId, board.boardName, board.adminEmail);

      boardDto.createDate = board.createDate;

      return boardDto;
    }

    toBoard(): SocialBoard {
      //
      const socialBoard = new SocialBoard(this.clubId, this.boardName, this.adminEmail);

      socialBoard.createDate = this.createDate;
      return socialBoard;
    }
}
export default BoardDto;