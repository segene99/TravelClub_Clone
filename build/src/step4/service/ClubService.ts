import ClubDto from "./dto/ClubDto";
import ClubMembershipDto from "./dto/ClubMembershipDto";

interface ClubService{
    addMembership(clubMembershipDto: ClubMembershipDto): unknown;
    remove(usid: string): void;
    modify(targetClub: ClubDto): void;
    findByName(clubName: string): ClubDto | null;
    register(clubDto: ClubDto): void;

}
export default ClubService