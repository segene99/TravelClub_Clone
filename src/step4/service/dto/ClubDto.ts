import DateUtil from "../../../util/DateUtil";
import ClubMembership from "../../entity/club/ClubMembership";
import TravelClub from "../../entity/club/TravelClub";
import ClubMembershipDto from "./ClubMembershipDto";

class ClubDto{

    usid: string = '';
    name: string = '';
    intro: string = '';
    foundationDate: string = '';

    boardId: string = '';
    membershipList: ClubMembershipDto[] = [];

    constructor(name: string, intro: string) {
        //
        this.name = name;
        this.intro = intro;
        this.foundationDate = DateUtil.today();
      }

      toTravelClub(): TravelClub{
        const travelClub = new TravelClub(this.name, this.intro);
        travelClub.usid = this.usid;
        travelClub.foundationDate = this.foundationDate;

        for (const membershipDto of this.membershipList) {
        travelClub.membershipList.push(membershipDto.toClubMembership());
        }
        return travelClub;

    }
    static toClubDto(foundClub: TravelClub): ClubDto {
        const clubDto = new ClubDto(foundClub.name, foundClub.intro);

        clubDto.usid = foundClub.usid;
        clubDto.foundationDate = foundClub.foundationDate;

        for(const membership of foundClub.membershipList){
            clubDto.membershipList.push(ClubMembershipDto.toMembershipDTO(membership));
        }
        return clubDto;
    }


}
export default ClubDto;
