import Address from "../../../step1/entity/club/Address";
import ClubMembership from "../../../step1/entity/club/ClubMembership";
import CommunityMember from "../../../step1/entity/club/CommunityMember";
import MembershipDTO from "./MembershipDTO";

class MemberDTO {

    name: string = '';
    email: string = '';
    birthday: string = '';
    nickname: string  = '';
    phoneNum: string = '';
    
    addresses: Address[] = [];
    membershipList: MembershipDTO[] =[];

    constructor(name: string, email: string, phoneNum: string){
        this.name = name;
        this.setEmail(email);
        this.phoneNum = phoneNum;
    }
    setEmail(email: string):void {
        if(!this.isValidEmail(email)){
            console.log('invalid form of email')
        }
        this.email = email;
    }
    isValidEmail(email: string): boolean {
        const ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        return !!email.match(ePattern);
    }

    static toMemberDTO(member: CommunityMember): MemberDTO {
        const memberDto = new MemberDTO(member.email, member.name, member.phoneNum);
  
        memberDto.nickname = member.nickname;
        memberDto.birthday = member.birthday;
        memberDto.addresses = member.addresses;
  
        for (const membership of member.membershipList) {
          //
          memberDto.membershipList.push(MembershipDTO.toMembershipDTO(membership));
        }
        return memberDto;
    }
    toCommunityMember(): CommunityMember {
        //
        const member = new CommunityMember(this.email, this.name, this.phoneNum);
  
        member.nickname = this.nickname;
        member.birthday = this.birthday;
  
        for (const membershipDto of this.membershipList) {
          member.membershipList.push(membershipDto.toClubMembership());
        }
  
        return member;
      }
}
export default MemberDTO