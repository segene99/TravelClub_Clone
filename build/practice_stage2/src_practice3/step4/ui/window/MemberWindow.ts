import { question } from "readline-sync";
import ClubMember from "../../entity/ClubMember";
import TravelClub from "../../entity/TravelClub";
import ClubCoordinator from "../../logic/ClubCoordinator";
import MemberCoordinator from "../../logic/MemberCoordinator";
import RoleInClub from "../../entity/RoleInClub";

class MemberWindow{

    currentClub: TravelClub | null = null;
    clubCoordinator: ClubCoordinator;
    memberCoordinator: MemberCoordinator;

    constructor(clubCoordinator: ClubCoordinator) {
      this.clubCoordinator = clubCoordinator;
      this.memberCoordinator = clubCoordinator.memberCoordinator;
    }

    findClub(): TravelClub | null{
        let clubFound = null;
        if(this.clubCoordinator.hasClubs()){
            console.log('no club in the storage');
            this.currentClub = null;
            return null;
        }
        while(true){
            const answer = question('enter the club name to find(0. go back)');
            if(!answer){
                console.log('cannot be null')
            }
            if(answer==='0'){break;}
            if(this.clubCoordinator.exist(answer)){
                clubFound = this.clubCoordinator.find(answer);
                console.log('found club: ', clubFound);
                break;
            }else{
                console.log('no such club in the storage' +  clubFound);
            }
            clubFound = null;
        }
        this.currentClub = clubFound;
        return clubFound;
    }
    register(): void {
        if (!this.currentClub) {
            console.log('\n> no target club. find target club first');
            return;
        }
        while(true){
            const emailInput = question('\n enter new member\'s email(0.Member menu): ');

            if(emailInput ==='0'){
                break;
            }

            if(this.memberCoordinator.exist(this.currentClub.name, emailInput)){
                console.log('same email already exists: ' + emailInput);
                continue;
            }

            const nameInput = question('enter the name: ');
            const phoneInput = question('enter the phone number: ');
            const birthdayInput = question('enter the birthday(ex.1999.02.08): ');
            const roleInput = question('enter the role(1. President / 2. Member): ');
            const nicknameInput = question('enter the nickname: ');

            const newMember = new ClubMember(nameInput,emailInput, phoneInput);
            newMember.nickname = nicknameInput;
            newMember.birthday = birthdayInput;
            if(this.memberCoordinator.hasMembers(this.currentClub.name)){           
                if(roleInput === '1'){
                    newMember.role = RoleInClub.President;
                } else if(roleInput === '2'){
                    newMember.role = RoleInClub.Member;
                }
             }

             this.memberCoordinator.register(this.currentClub.name,newMember);
             console.log('Registered member name: ', newMember.name);

        }

    }
    search(): void {
        if (!this.currentClub) {
            console.log('\n> no target club. find target club first');
            return;
        }

        if(!this.memberCoordinator.hasMembers(this.currentClub.name)){           
            console.log('no member in the club');
            return;
        }

        
        while(true){
            const emailInput = question('\n enter member\'s email to find(0.Member menu): ');

            if(emailInput ==='0'){
                break;
            }

            if(this.memberCoordinator.exist(this.currentClub.name, emailInput)){
                const member = this.memberCoordinator.find(this.currentClub.name, emailInput);
                if(member){
                    console.log('member found: ', member);
                    break;
                }
            } else {
                console.log('no such member in the storage');
            }
            
        }
       
    }
    modify(): void {
        if (!this.currentClub) {
            console.log('\n> no target club. find target club first');
            return;
        }

        if(!this.memberCoordinator.hasMembers(this.currentClub.name)){           
            console.log('no member in the club');
            return;
        }

        while(true){
            const emailInput = question('enter the email of user to modify(Enter. no change / 0. go back to member menu)');

        if(emailInput === '0'){
            return;  
        }

        if(!this.memberCoordinator.exist(this.currentClub.name, emailInput)){
            console.log('the member with ' + emailInput + ' doesn\'t exists');
            return;
        }
        
        const targetMember = this.memberCoordinator.find(this.currentClub.name, emailInput);

        if(!targetMember){
            console.log('\n> No such a member ');
        }

        console.log('\n> Found member: ', targetMember);

            const nameInput = question('enter the name: ');
            const phoneInput = question('enter the phone number: ');
            const birthdayInput = question('enter the birthday(ex.1999.02.08): ');
            const roleInput = question('enter the role(1. President / 2. Member): ');
            const nicknameInput = question('enter the nickname: ');

            const newMember = new ClubMember(nameInput, emailInput,  phoneInput);
            newMember.nickname = nicknameInput;
            newMember.birthday = birthdayInput;
            if(this.memberCoordinator.hasMembers(this.currentClub.name)){           
                if(roleInput === '1'){
                    newMember.role = RoleInClub.President;
                } else if(roleInput === '2'){
                    newMember.role = RoleInClub.Member;
                }
             }
            
            const newInfoMap = new Map<string, string>();
        if(targetMember){
            newInfoMap.set('name', nameInput || newMember.name)
            newInfoMap.set('phoneNumber', phoneInput || newMember.phoneNum)
            newInfoMap.set('birthday', birthdayInput || newMember.birthday)
            newInfoMap.set('role', targetMember.role || newMember.role)
            newInfoMap.set('nickname', nicknameInput || newMember.nickname)

            this.memberCoordinator.modify(targetMember, newInfoMap);
            console.log('modification complete: ' + targetMember.name);
        } else {
            console.log('no such member found to modify');
        }
      
    }
}
remove(): void {
        if(!this.currentClub){
            console.log('no club is selected. please select the club');
            return;
        }
        if (!this.memberCoordinator.hasMembers(this.currentClub.name)) {
            console.log('\n> No members in the target club: ' + this.currentClub.name);
          }
        while(true){
          const emailInput = question('enter the email of user to remove(Enter. no change / 0. back to the menu)');
        
        if(emailInput === '0'){
            return;
        }

          if(!emailInput){
              console.log('the input cannot be null');
              continue;
          }
  
          if(!this.memberCoordinator.exist(this.currentClub.name, emailInput)){
              console.log('the member with ' + emailInput + ' doesn\'t exists');
              continue;
          }

          const memberFounded: ClubMember | null = this.memberCoordinator.find(this.currentClub.name, emailInput);

          const confirmation = question('Do you want to remove the member ' + memberFounded?.name + ' ?(1. yes / 2. no)');

          if(confirmation === '1'){
            this.memberCoordinator.remove(this.currentClub, memberFounded);
            console.log('removal complete');
            break;

          } else if (confirmation === '2'){
            break;
          }
        }
    }
   

}
export default MemberWindow