import ClubMember from "../../step1/ClubMember";
import RoleInClub from "../../step1/RoleInClub";
import TravelClub from "../../step1/TravelClub";

class MemberCoordinator {
    modify(newInfoMap: Map<string, string>, memberFound: ClubMember): void {
        const keys = newInfoMap.keys();
        let key = keys.next();

        while(key.value){

            const valueNow = key.value;
            const valueChanged = newInfoMap.get(valueNow) || '';

            switch(valueNow){

           
            case 'name':
                memberFound.name = valueChanged;
                break;
            case 'phoneNum':
                memberFound.phoneNum = valueChanged;
                break;

            case 'nickname':
                memberFound.nickname = valueChanged;
                break;

            case 'role':
                memberFound.role = valueChanged as RoleInClub;
                break;

            case 'birthday':
                memberFound.birthday = valueChanged;
                break;

            }
            key = keys.next();
        }

    }
   
    register(currentClub: TravelClub, newMember: ClubMember): boolean {
        if(this.exist(currentClub, newMember.email)){
            console.log('already existed member');
            return false;
        }

        if(currentClub.members.push(newMember)){
            return true;
        }

        return false;
    }
    remove(currentClub: TravelClub, member: ClubMember): boolean {
        const index = member.email.indexOf(member.email)
        currentClub.members.splice(index, 1);
        if(member.email.indexOf(member.email) === -1){
            return false;
        }
        return true;

    }
    exist(currentClub: TravelClub, email: string): ClubMember | null {
        for (const member of currentClub.members) {
            if (member.email === email) {
                return member;
            }
        }
        return null;
    }

    hasMembers(currentClub: TravelClub | null): boolean {
        return currentClub?.members.length !== 0;
    }

}
export default MemberCoordinator