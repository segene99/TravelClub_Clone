import MemberDTO from "./dto/MemberDTO";

interface MemberService{
    remove(email: string): unknown;
    modify(modifiedMember: MemberDTO): unknown;
    find(email: string): MemberDTO;
    register(newMember: MemberDTO): void;


}
export default MemberService