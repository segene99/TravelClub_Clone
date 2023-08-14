import ClubDto from "./dto/ClubDto";
import ClubMembershipDto from "./dto/ClubMembershipDto";
import MemberDto from "./dto/MemberDto";

interface ClubService{
    removeMembership(usid: string, memberEmail: string): void;
    modifyMembership(clubId: string, targetMembership: ClubMembershipDto): void;
    findMembership(usid: string, memberEmail: string): ClubMembershipDto | null;
    addMembership(clubMembershipDto: ClubMembershipDto): void;
    
    ////club service////
    remove(usid: string): void;
    modify(targetClub: ClubDto): void;
    findByName(clubName: string): ClubDto | null;
    register(clubDto: ClubDto): void;

}
export default ClubService