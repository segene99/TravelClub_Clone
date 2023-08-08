import { question } from "readline-sync";
import ServiceLogics from "../../logic/ServiceLogics";
import MemberService from "../../service/MemberService";
import CommunityMember from "../../entity/club/CommunityMember";
import MemberDto from "../../service/dto/MemberDto";

class MemberConsole{

    memberService: MemberService;

    constructor(){
        this.memberService = ServiceLogics.shareInstance().createMemberService();
    }

    register(): void {
        const email = question('\n new member\'s email (0.Member menu): ');

        if (email === '0') {
          return;
        }
  
        const name = question(' name: ');
        const phoneNumber = question(' phone number: ');
        const nickName = question(' nickname: ');
        const birthday = question(' birthday(yyyy.mm.dd): ');
  
        const member = new CommunityMember(email, name, phoneNumber);
  
        try {
          const newMember = new MemberDto(member.email, member.name, member.phoneNumber);
  
          newMember.nickName = nickName;
          newMember.birthDay = birthday;
  
          this.memberService.register(newMember);
          console.log('\n> Registered member: ', newMember);
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }    }
    find(): void {
        while (true) {
            const email = question('\n member\'s email (0.Member menu): ');
    
            if (email === '0') {
              return;
            }
    
            try {
              const memberFound = this.memberService.find(email);
    
              console.log('\n> Found member: ', memberFound);
            }
            catch (e) {
              if(e instanceof Error) {
                console.error(`Error: ${e.message}`);
              }
            }
          }    
    }
    findOne(): MemberDto | null {
        let memberFound = null;
  
        while (true) {
          const email = question('\n member\'s email to find (0.Member menu): ');
  
          if (email === '0') {
            break;
          }
  
          try {
            memberFound = this.memberService.find(email);
            console.log('\n> Found member : ', memberFound);
            break;
          }
          catch (e) {
            if(e instanceof Error) {
              console.error(`Error: ${e.message}`);
            }
          }
        }
  
        return memberFound;
      }
    modify(): void{
        const targetMember = this.findOne();

        if (!targetMember) {
          return;
        }
  
        const newName = question('new name (Enter. no change): ');
        targetMember.name = newName;
  
        const newPhoneNumber = question('new phone number (Enter. no change): ');
        targetMember.phoneNumber = newPhoneNumber;
  
        const newNickName = question('new nickname (Enter. no change): ');
        targetMember.nickName = newNickName;
  
        const newBirthDay = question('new birthday(yyyy.mm.dd) (Enter. no change): ');
        targetMember.birthDay = newBirthDay;
  
        try {
          this.memberService.modify(targetMember);
          console.log('\n> Modified member: ', targetMember);
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }    }
    delete(): void {
        const targetMember = this.findOne();

        if (!targetMember) {
          return;
        }
  
        const confirmStr = question('Remove this club? (Y:yes, N:no): ');
  
        if (confirmStr.toLowerCase() === 'y' || confirmStr.toLowerCase() === 'yes') {
          console.log('\n> Removing a club --> ' + targetMember.name);
          this.memberService.delete(targetMember.email);
        }
        else {
          console.log('\n> Remove cancelled, your club is safe. --> ' + targetMember.name);
        }    }

}
export default MemberConsole