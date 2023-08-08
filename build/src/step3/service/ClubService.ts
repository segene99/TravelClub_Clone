import TravelClub from "../../step1/entity/club/TravelClub";
import ClubDTO from "./dto/ClubDTO";
import MembershipDTO from "./dto/MembershipDTO";

interface ClubService{
    findByName(clubName: string): ClubDTO;
    register(clubDto: ClubDTO): void;
    modify(targetClub: ClubDTO):void;
    remove(usid: string): void;
    showMenu(): void;

    addMembership(membershipDto: MembershipDTO): void;
    findMembership(clubId: string, memberId: string):MembershipDTO | null;
    modifyMembership(clubId: string, membershipDto:MembershipDTO): void;
    removeMembership(clubId: string, memberId: string): void;


}
export default ClubService