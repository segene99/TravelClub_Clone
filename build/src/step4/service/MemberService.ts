import MemberDto from "./dto/MemberDto";

interface MemberService{
    delete(email: string): void;
    modify(targetMember: MemberDto): void;
    find(email: string): MemberDto;
    register(newMember: MemberDto): void;

}
export default MemberService
