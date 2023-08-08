import ClubMembership from "../../../step1/entity/club/ClubMembership";
import ClubMemberShip from "../../../step1/entity/club/ClubMembership";
import TravelClub from "../../../step1/entity/club/TravelClub";
import DateUtil from "../../../util/DateUtil";
import MembershipDTO from "./MembershipDTO";

class ClubDTO{
 

    name: string = '';
    intro: string = '';
    foundedDate: string = '';
    usid: string = '';
    membershipList: MembershipDTO[] = [];

    constructor(name: string, intro: string){
        this.name = name;
        this.intro = intro;
        this.foundedDate = DateUtil.today();
    }

    toTravelClub(): TravelClub{
        const travelClub = new TravelClub(this.name, this.intro);
        travelClub.usid = this.usid;
        travelClub.foundDate = this.foundedDate;

        for (const membershipDto of this.membershipList) {
        travelClub.membershipList.push(membershipDto.toClubMembership());
        }
        return travelClub;

    }
    static toClubDTO(foundClub: TravelClub): ClubDTO {
        const clubDto = new ClubDTO(foundClub.name, foundClub.intro);

        clubDto.usid = foundClub.usid;
        clubDto.foundedDate = foundClub.foundDate;

        for(const membership of foundClub.membershipList){
            clubDto.membershipList.push(MembershipDTO.toMembershipDTO(membership));
        }
        return clubDto;
    }

    getMembershipBy(email: string): ClubMembership | null {
        //email 있는지 확인
        if (!email || !email.length) {
          return null;
        }
  
        let clubMembership;
  
        for (clubMembership of this.membershipList) {
          if (email === clubMembership.memberEmail) {
            return clubMembership;
          }
        }
        return null;
      }

}
export default ClubDTO