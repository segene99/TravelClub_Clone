import Address from "../../entity/club/Address";
import ClubMembership from "../../entity/club/ClubMembership";
import CommunityMember from "../../entity/club/CommunityMember";
import ClubMembershipDto from "./ClubMembershipDto";

class MemberDto{
    email: string = '';
    name: string = '';
    nickName: string = '';
    phoneNumber: string = '';
    birthDay: string ='';

    addresses: Address[] = [];
    membershipList: ClubMembershipDto[] = [];

    constructor(name: string, email: string, phoneNumber: string){
        this.name = name;
        this.setEmail(email);
        this.phoneNumber = phoneNumber;
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

    static toMemberDTO(member: CommunityMember): MemberDto {
        const memberDto = new MemberDto(member.email, member.name, member.phoneNumber);
  
        memberDto.nickName = member.nickName;
        memberDto.birthDay = member.birthDay;
        memberDto.addresses = member.addresses;
  
        for (const membership of member.membershipList) {
          //
          memberDto.membershipList.push(ClubMembershipDto.toMembershipDTO(membership));
        }
        return memberDto;
    }
    toCommunityMember(): CommunityMember {
        //
        const member = new CommunityMember(this.email, this.name, this.phoneNumber);
  
        member.nickName = this.nickName;
        member.birthDay = this.birthDay;
  
        for (const membershipDto of this.membershipList) {
          member.membershipList.push(membershipDto.toClubMembership());
        }
  
        return member;
      }


}
export default MemberDto