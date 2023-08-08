import SocialBoard from "../../../step1/entity/board/SocialBoard";
import DateUtil from "../../../util/DateUtil";

class BoardDTO{

    clubid: string = '';
    clubName: string = '';
    adminEmail: string = '';
    createdDate: string = '';


    constructor(id: string, name: string, email: string){
        this.clubid = id;
        this.clubName = name;
        this.adminEmail = email;
        this.createdDate = DateUtil.today();
    }

    toSocialBoard(): SocialBoard{
        const socialBoard = new SocialBoard(this.clubid, this.clubName, this.adminEmail);
        socialBoard.createdDate = this.createdDate;
        return socialBoard
    }

    static toBoardDTO(boardFound: SocialBoard | undefined): BoardDTO | null {
        if(boardFound !== undefined){
            const boardDTO = new BoardDTO(boardFound?.clubid, boardFound?.clubName, boardFound?.adminEmail);
            boardDTO.createdDate = boardFound?.createdDate;
            return boardDTO;
        }
        return null;
       
    }
}
export default BoardDTO