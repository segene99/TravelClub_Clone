import MapStores from "../map/MapStores";
import MemberService from "../service/MemberService";
import MemberDto from "../service/dto/MemberDto";
import MemberStore from "../store/MemberStore";
import ServiceLogics from "./ServiceLogics";

class MemberServiceLogic implements MemberService{
    
    memberStore: MemberStore;

    constructor(){
        this.memberStore = MapStores.getInstance().requestMemberStore();
    }
    delete(email: string): void {
        if (!this.memberStore.exists(email)) {
            throw new Error('No such member with email: ' + email);
          }
          this.memberStore.delete(email);
    }
    modify(targetMember: MemberDto): void {
        const foundMember = this.memberStore.retrieveByEmail(targetMember.email);

        if (!foundMember) {
            throw new Error('No such member with email: ' + targetMember.email);
          }
    
          if (!targetMember.name) {
            targetMember.name = foundMember.name;
          }
    
          if (!targetMember.nickName) {
            targetMember.nickName = foundMember.nickName;
          }
    
          if (!targetMember.phoneNumber) {
            targetMember.phoneNumber = foundMember.phoneNumber;
          }
    
          if (!targetMember.birthDay) {
            targetMember.birthDay = foundMember.birthDay;
          }
    
          this.memberStore.update(targetMember.toCommunityMember());

    }
    find(memberEmail: string): MemberDto {
        const foundMember = this.memberStore.retrieveByEmail(memberEmail);

        if (!foundMember) {
          throw new Error('No such member with email: ' + memberEmail);
        }
        return MemberDto.toMemberDTO(foundMember);    
    }

    register(memberDto: MemberDto): void {
            const email = memberDto.email;
                const foundMember = this.memberStore.retrieveByEmail(email);

                if (foundMember) {
                    throw new Error('Member already exist the member email: ' + foundMember.email);
                }
                this.memberStore.create(memberDto.toCommunityMember());  
    }

}
export default MemberServiceLogic