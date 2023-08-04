import ClubMember from "../entity/ClubMember";
import RoleInClub from "../entity/RoleInClub";
import TravelClub from "../entity/TravelClub"
import MapStorage from "./MapStorage"

class ClubMemberStore {
 

    clubMap: Map<string, TravelClub>
    
    constructor(){
        this.clubMap = MapStorage.getInstance().clubMap
    }

    register(currentClub: string,newMember: ClubMember): void {
        const targetClub = this.clubMap.get(currentClub);
        if(targetClub !== undefined){
            const hasMember = this.exist(currentClub, newMember.email);
            if(hasMember){
                return;
            }
            targetClub.memberList.push(newMember);
        } 
    }
    hasMembers(name: string): boolean{
        if(!this.clubMap.get(name)){
            return false;
        }
        return true;
    }
    exist(clubName: string, emailInput: string): boolean{
        const club = this.clubMap.get(clubName);

      if (club !== undefined) {
        for (const member of club.memberList) {
          if (member.email === emailInput) {
            return true;
          }
        }
      }
      return false;
    }

    find(currentClubName: string, emailInput: string): ClubMember {
        const club = this.clubMap.get(currentClubName);

        if (club !== undefined) {
          for (const member of club.memberList) {
            if (member.email === emailInput) {
              return member;
            }
          }
        }
        throw new Error('no member found');
    }

    modify(targetMember: ClubMember, newInfoMap: Map<string, string>): void{
        const keys = newInfoMap.keys();
        let key = keys.next();

        while(key.value){
            const targetKey = key.value;
            const value = newInfoMap.get(targetKey) || '';

            switch(targetKey){
                case 'name':
                    targetMember.name = value;
                    break;
                case 'phoneNumber':
                    targetMember.phoneNum = value;
                    break;
                case 'birthday':
                    targetMember.birthday = value;
                    break;
                case 'role':
                    targetMember.role = value as RoleInClub;
                    break;
                case 'nickname':
                    targetMember.nickname = value;
                    break;

            }
            key = keys.next();
        }
    }
    remove(currentClub: TravelClub, memberFounded: ClubMember): void {
       const club = this.clubMap.get(currentClub.name);
       let targetMember = null;
    if(club !== undefined){
        for(const member of club.memberList){
            if(member.email === memberFounded.email){
                targetMember = member;
            }
        }
        if(targetMember){
            const index = club.memberList.indexOf(targetMember);
            club.memberList.splice(index, 1);
        }
    }
       
    }
 

}
export default ClubMemberStore