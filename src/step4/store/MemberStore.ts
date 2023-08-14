import CommunityMember from "../entity/club/CommunityMember";
import MemberDto from "../service/dto/MemberDto";

interface MemberStore{
    delete(email: string): void;
    exists(email: string): boolean;
    update(member: CommunityMember): void;
    create(member: CommunityMember): string;
    retrieveByEmail(email: string): CommunityMember | null;

}
export default MemberStore