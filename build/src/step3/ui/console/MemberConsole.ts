import { question } from "readline-sync";
import MemberServiceLogic from "../../logic/MemberServiceLogic";
import ServiceLogicLycler from "../../logic/ServiceLogicLycler";
import MemberService from "../../service/MemberService";
import CommunityMember from "../../../step1/entity/club/CommunityMember";
import MemberDTO from "../../service/dto/MemberDTO";

class MemberConsole{

    memberService: MemberService

    constructor(){
        this.memberService = ServiceLogicLycler.shareInstance().createMemberService();
    }

  register(): void {
        while(true){
            const newEmail = question('enter new email to register(0.back to menu): ');
            if(newEmail === '0'){return;}
            const newName = question('enter new name: ');
            const newBirthday = question('enter new birthday: ');
            const newNickname = question('enter new nickname: ');
            const newPhonenum = question('enter new phonenum: ');
            try {
                const newMember = new MemberDTO(newName, newEmail, newPhonenum);
                newMember.birthday = newBirthday;
                newMember.nickname = newNickname;
                
                this.memberService.register(newMember);
            console.log('registration success');
            } catch (error) {
                console.error(`Error: ${error as Error["message"]}`);
            }
            
        }
  }
  find(): void {
    while(true){
        const email = question('enter the email to find member(0.back to menu');
        if(email === '0'){return;}
        try {
            const memberFound = this.memberService.find(email);
            console.log('found member: ', memberFound);
        } catch (error) {
            if(error instanceof Error) {
                console.error(`Error: ${error.message}`);
              }
        }
    }
  }
  modify(): void{
    const targetMember = this.findOne();
    if(!targetMember){return;}
    const newName = question('enter new name');
    const newPhonenum = question('enter new phone number');
    const newNickname = question('enter new nickname');
    const newBirthday = question('enter new birthday');
    try {
        const modifiedMember = new MemberDTO(newName,targetMember.email,newPhonenum);
        modifiedMember.birthday = newBirthday;
        modifiedMember.nickname = newNickname;
        this.memberService.modify(modifiedMember);
        console.log('modification complete: ', modifiedMember);
    } catch (error) {
        if(error instanceof Error) {
            console.error(`Error: ${error.message}`);
          }
    }
    
    

  }
  findOne(): MemberDTO | null {
    while(true){
        const email = question('enter the email to find member(0.back to menu');
        if(email === '0'){return null;}
        try {
            const memberFound = this.memberService.find(email);
            console.log('found member: ', memberFound);
        } catch (error) {
            if(error instanceof Error) {
                console.error(`Error: ${error.message}`);
              }
        }
    }

  }
  remove(): void {
    while(true){
        const targetMember = this.findOne();
        if(!targetMember){
            console.log('not found');
            continue;
        }
        const confirmation = question('are you sure? (1. yes / 2. not sure)');
        const confirmationNum = parseInt(confirmation);
        if(confirmationNum === 1){
            this.memberService.remove(targetMember.email);
            break;
        }else{
            console.log('removal cancelled');
            return;
        }
    }
  }
  
}
export default MemberConsole