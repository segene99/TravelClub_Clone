import CommunityMember from "../../step1/entity/club/CommunityMember";
import ClubService from "../service/ClubService";
import MemberService from "../service/MemberService";
import ClubDTO from "../service/dto/ClubDTO";
import MemberDTO from "../service/dto/MemberDTO";
import MembershipDTO from "../service/dto/MembershipDTO";
import MapStorage from "./storage/MapStorage";

class MemberServiceLogic implements MemberService{

    memberMap: Map<string, CommunityMember>

    constructor(){
        this.memberMap = MapStorage.getInstance().memberMap;
    }
    remove(email: string): void {
        if(!this.memberMap.get(email)){
            console.log('member not found');
            return;
        }
        this.memberMap.delete(email);
    }

    modify(modifiedMember: MemberDTO): void {
        const currentMember = this.memberMap.get(modifiedMember.email);
        if(!currentMember){
            throw new Error('No such member with email: ' + modifiedMember.email)
        }
        //있으면 기존것으로, 없으면 새로운것
        if(!modifiedMember.name){
            currentMember.name = modifiedMember.name;
        }
          if (!modifiedMember.nickname) {
            currentMember.nickname = modifiedMember.nickname;
          }
    
          if (!modifiedMember.phoneNum) {
            currentMember.phoneNum = modifiedMember.phoneNum;
          }
    
          if (!modifiedMember.birthday) {
            currentMember.birthday = modifiedMember.birthday;
          }
          
        this.memberMap.set(modifiedMember.email, modifiedMember.toCommunityMember());

    }
        
    find(email: string): MemberDTO {
        const memberFound = this.memberMap.get(email);
        if(memberFound !== undefined){
            const member = MemberDTO.toMemberDTO(memberFound);
            return member;
        }
        throw new Error('member with the email not found');
        
    }
    register(newMember: MemberDTO): void {
        //중복확인
        const foundMember = this.memberMap.get(newMember.email);
        if(foundMember){
            throw new Error('member already exists under entered email');
        }
        this.memberMap.set(newMember.email, newMember.toCommunityMember());
    }
}

export default MemberServiceLogic