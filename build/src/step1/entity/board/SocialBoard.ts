import DateUtil from "../../../util/DateUtil";
import Entity from "../Entity";
import CommunityMember from "../club/CommunityMember";
import TravelClub from "../club/TravelClub";

class SocialBoard implements Entity{


    clubid: string = '';
    clubName: string = '';
    adminEmail: string = '';
    createdDate: string = '';
    seq: number = 0;

    constructor(id: string, name: string, email: string){
        this.clubid = id;
        this.clubName = name;
        this.adminEmail = email;
        this.createdDate = DateUtil.today();
    }

    getId(): string{
        return this.clubid
    }

    static getSample(club: TravelClub): SocialBoard{

        const member = CommunityMember.getSample();
        const board = new SocialBoard(club.clubid, club.name, member.email);
        board.createdDate = '2022.07.07'
        return board;

    }

    get nextPostingId(): string{
        return `${this.clubid} : ${this.seq++}`;
    }

}
export default SocialBoard