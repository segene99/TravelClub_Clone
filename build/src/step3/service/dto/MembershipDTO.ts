import ClubMemberShip from "../../../step1/entity/club/ClubMembership";
import RoleInClub from "../../../step1/entity/club/RoleInClub";
import DateUtil from "../../../util/DateUtil";

class MembershipDTO{


    clubId: string = '';
    memberEmail: string = '';
    role: RoleInClub = RoleInClub.Member;
    joinDate: string = '';

    constructor(clubId: string, email: string) {
        //
        this.clubId = clubId;
        this.memberEmail = email;
        this.joinDate = DateUtil.today();
      }

    static toMembershipDTO(membership: ClubMemberShip): MembershipDTO {
        const membershipDto = new MembershipDTO(membership.clubId, membership.memberEmail);
        membershipDto.joinDate = membership.joinDate;
        membershipDto.role = membership.role;
        return membershipDto;
    }

    toClubMembership(): ClubMemberShip{
        const membership = new ClubMemberShip(this.clubId, this.memberEmail);
        membership.role = this.role;
        membership.joinDate = this.joinDate;
        return membership;
    }


}
export default MembershipDTO