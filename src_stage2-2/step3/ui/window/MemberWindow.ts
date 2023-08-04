import { question } from "readline-sync";
import TravelClub from "../../../step1/TravelClub";
import ClubCoordinator from "../../logic/ClubCoordinator"
import MemberCoordinator from "../../logic/MemberCoordinator"
import MemberMenu from "../menu/MemberMenu"
import ClubMember from "../../../step1/ClubMember";
import RoleInClub from "../../../step1/RoleInClub";

class MemberWindow {
    currentClub: TravelClub | null = null;
    memberCoordinator: MemberCoordinator;
    clubCoordinator: ClubCoordinator;

    constructor(clubCoordinator: ClubCoordinator) {
        this.clubCoordinator = clubCoordinator;
        this.memberCoordinator = clubCoordinator.memberCoordinator;
    }

    findAnotherClub(): TravelClub | null {
        let clubFounded = null;
        if(!this.clubCoordinator.hasClubs()){
            console.log('No clubs existing');
            return null;
        }
        while (true) {
            const clubName = question('\n enter the club name to find(0. member menu):');
    
            if (clubName === '0') {
              break;
            }
    
            if (this.clubCoordinator.exist(clubName) != null) {
              console.log('\n> Found club: ', clubFounded);
              break;
            }
            else {
              console.log('\n> No such club in the storage. --> ' + clubName);
              continue;
            }
          }
    
          this.currentClub = clubFounded;
          return clubFounded;

    }
    add(): void {
        if(!this.currentClub){
            console.log('no club is selected. please select the club');
            return;
        }   
        while(true){
            
            const email = question('\n enter member\'s email to register(0. member menu):');
            if (email === '0') {
                return;
              }
            
              if(!email){
                console.log('the input cannot be null');
                continue;
            }

            if(this.memberCoordinator.exist(this.currentClub, email)){
                console.log('Already existing email. try again');
                continue;
            }

            let newEmail = email;
            
            const nameInput = question('enter member\'s name to register:');
            let newName = nameInput;
            
            if(!newName){
                console.log('the input cannot be null');
                continue;
            }

            const phoneInput = question('enter member\'s phone number to register:');
            let newPhoneNum = phoneInput;

            if(!newPhoneNum){
                console.log('the input cannot be null');
                continue;
            }

            const nicknameInput = question('enter member\'s nickname to register:');
            let newNickname = nicknameInput;

            if(!newNickname){
                console.log('the input cannot be null');
                continue;
            }

            const roleInput = question('set the role(1. President, 2. Member)');
            const roleNum = parseInt(roleInput);
            if(roleNum !== 1 && roleNum !== 2){
                console.log('entered invalid number. please choose 1 or 2');
                continue;
            }

            newName = newName.trim();
            newPhoneNum = newPhoneNum.trim();
            newNickname = newNickname.trim();

            const newMember = new ClubMember(newName,newPhoneNum,newEmail);
            newMember.nickname = newNickname;
            
            if(roleNum === 1){
                newMember.role = RoleInClub.President;
            } else if(roleNum === 2){
                newMember.role = RoleInClub.Member;
            }

            if(this.memberCoordinator.register(this.currentClub, newMember)){
                console.log('registeration complete. registered info: ' + newMember);
            }
            break;

        }
        return;
    }
    find(): void {
        let emailInput = '';

        if(!this.currentClub){
            console.log('no club is selected. please select the club');
            return;
        }

        if (!this.memberCoordinator.hasMembers(this.currentClub) && this.currentClub != null) {
            console.log('\n> No members in the target club: ' + this.currentClub.name);
            return;
        }

        while(true){
            emailInput = question('enter the email to search(0, member menu)');

            if(emailInput === '0'){
                return;
            }

            if(!emailInput){
                console.log('the input cannot be null');
                continue;
            }

            break;
        }

        const emailSearch = emailInput;

        const memberFounded: ClubMember | null = this.memberCoordinator.exist(this.currentClub, emailSearch);

        if(memberFounded == null){
            console.log('no member found under:', emailSearch);
            return;
        } 

        console.log('member founded: '+ memberFounded);

    }
    modify(): void {
        if(!this.currentClub){
            console.log('no club is selected. please select the club');
            return;
        }
        if (!this.memberCoordinator.hasMembers(this.currentClub)) {
            console.log('\n> No members in the target club: ' + this.currentClub.name);
          } 
        
          const emailInput = question('enter the email of user to modify(0. go back to club menu)');

          if (emailInput === '0') {
            return;
          }

          if(!emailInput){
            console.log('the input cannot be null');
            return;
          }
          while(true){

                const memberFound = this.memberCoordinator.exist(this.currentClub, emailInput);

                if(memberFound == null){
                    console.log('the member with ' + emailInput + ' doesn\'t exists');
                    return;
                }

                let newEmail = emailInput;
                
                const nameInput = question('enter member\'s name to modify(0. member menu):');
                let newName = nameInput;
                


                if(!newName){
                    console.log('the input cannot be null');
                    continue;
                }

                const phoneInput = question('enter member\'s phone number to modify:');
                let newPhoneNum = phoneInput;

                if(!newPhoneNum){
                    console.log('the input cannot be null');
                    continue;
                }

                const nicknameInput = question('enter member\'s nickname to modify:');
                let newNickname = nicknameInput;

                if(!newNickname){
                    console.log('the input cannot be null');
                    continue;
                }

                const roleInput = question('set the role(1. President, 2. Member)');
                const roleNum = parseInt(roleInput);
                if(roleNum !== 1 && roleNum !== 2){
                    console.log('entered invalid number. please choose 1 or 2');
                    continue;
                }

                newName = newName.trim();
                newPhoneNum = newPhoneNum.trim();
                newNickname = newNickname.trim();

                const newMember = new ClubMember(newName,newPhoneNum,newEmail);
                newMember.nickname = newNickname;
                
                if(roleNum === 1){
                    newMember.role = RoleInClub.President;
                } else if(roleNum === 2){
                    newMember.role = RoleInClub.Member;
                 }
                 const newInfoMap = new Map<string, string>();

                 if(memberFound){
                     newInfoMap.set('name', newName || memberFound.name)
                     newInfoMap.set('phoneNum', newName || memberFound.phoneNum)
                     newInfoMap.set('nickname', newName || memberFound.nickname)
                     newInfoMap.set('birthday', newName || memberFound.birthday)
                     newInfoMap.set('role', newName || memberFound.role)
     
                    this.memberCoordinator.modify(newInfoMap, memberFound)
                    console.log('modification complete: ' + memberFound.name);
                    break;
                 }
    }
    return;
}
    remove() {
        if(!this.currentClub){
            console.log('no club is selected. please select the club');
            return;
        }
        if (!this.memberCoordinator.hasMembers(this.currentClub)) {
            console.log('\n> No members in the target club: ' + this.currentClub.name);
          }    
        while (true) {
        const email = question('\n enter the club to remove(0. member menu):');

        if (email === '0' || !email.length) {
          return;
        }

        const member = this.memberCoordinator.exist(this.currentClub, email);

        if (member == null) {
          console.log('\n> No such member -> ' + email);
          continue;
        }
        
        if (member != null) {
          this.memberCoordinator.remove(this.currentClub, member);
        }
        console.log('\n> Removed by email --> ' + email);

        break;
      }
        
        
    }

 
}

export default MemberWindow