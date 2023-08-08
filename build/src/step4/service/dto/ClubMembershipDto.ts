import DateUtil from "../../../util/DateUtil";
import RoleInClub from "../../entity/club/RoleInClub";
import ClubMembership from '../../entity/club/ClubMembership';

class ClubMembershipDto{

    clubId: string = '';
    memberEmail: string = '';
    role: RoleInClub = RoleInClub.Member;
    joinDate: string = '';

    constructor(clubId: string, email: string) {
        this.clubId = clubId;
        this.memberEmail = email;
        this.joinDate = DateUtil.today();
      }

    static toMembershipDTO(membership: ClubMembership): ClubMembershipDto {
        const membershipDto = new ClubMembershipDto(membership.clubId, membership.memberEmail);
        membershipDto.joinDate = membership.joinDate;
        membershipDto.role = membership.role;
        return membershipDto;
    }

    toClubMembership(): ClubMembership{
        const membership = new ClubMembership(this.clubId, this.memberEmail);
        membership.role = this.role;
        membership.joinDate = this.joinDate;
        return membership;
    }

}
export default ClubMembershipDto