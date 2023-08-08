import { question } from "readline-sync";
import ServiceLogicLycler from "../../logic/ServiceLogicLycler";
import ClubService from "../../service/ClubService";
import ClubDTO from "../../service/dto/ClubDTO"
import MembershipDTO from "../../service/dto/MembershipDTO";
import RoleInClub from "../../../step1/entity/club/RoleInClub";

class MembershipConsole{
    currentClub: ClubDTO | null = null;
    clubService: ClubService

    constructor(){
        this.clubService = ServiceLogicLycler.shareInstance().createClubService();
    }

    findClub(): void {
        let clubFound = null;
        while(true){
            const clubName = question('enter the club name to find(0.back to menu)');
            if (clubName === '0') {
                break;
            }
            clubFound = this.clubService.findByName(clubName);
            console.log('Found Club: ', clubFound);

        }
        this.currentClub = clubFound;
    }
    add(): void{
        if(!this.currentClub){
            console.log('club not selected');
            return;
        }
        while(true){
            const email = question('enter the email to add(0.back to menu: )');
            if(email === '0'){
                return;
            }
            const role = question('enter the member role(President | Member): ');
            
            const membershipDTO = new MembershipDTO(this.currentClub.usid, email);
            membershipDTO.role = role as RoleInClub;
            this.clubService.addMembership(membershipDTO);
            console.log('member added successfully')


        }

    }
    find(): void {
        if(!this.currentClub){
            console.log('no club selected');
            return;
        }
        while(true){
            const email = question('email to find(0. back to menu)');
            if(email === '0'){
                break;
            }
            const membershipDTO = this.clubService.findMembership(this.currentClub.usid, email);
            console.log('found membership info');
        }
    }
    modify(): void {
        if (!this.currentClub) {
            //
            console.log('> No target club yet. Find target club first.');
            return;
          }
          const targetMembership = this.findOne();
    
          if (!targetMembership) {
            return;
          }
          const newRole = question('new President|Member (0.Membership menu, Enter. no change): ');
          if (newRole === '0') {
            return;
          }
          targetMembership.role = newRole as RoleInClub;
          const clubId = targetMembership.clubId;
          this.clubService.modifyMembership(clubId, targetMembership);
          const modifiedMembership = this.clubService.findMembership(clubId, targetMembership.memberEmail);
          console.log('\n> Modified membership information: ', modifiedMembership);
    }
    remove(): void {
        if (!this.currentClub) {
            //
            console.log('> No target club yet. Find target club first.');
            return;
          }
    
          const targetMembership = this.findOne();
    
          if (!targetMembership) {
            return;
          }
    
          const confirmStr = question('Remove this member in the club? (Y:yes, N:no): ');
    
          if (confirmStr.toLowerCase() === 'y' || confirmStr.toLowerCase() === 'yes') {
            //
            console.log('\n> Removing a membership -->' + targetMembership.memberEmail);
            if (this.currentClub) {
              this.clubService.removeMembership(this.currentClub.usid, targetMembership.memberEmail);
            }
          }   
         }
    findOne() : MembershipDTO | null{
        let membershipDto = null;

      while (true) {
        const memberEmail = question('\n member email to find (0.Membership menu): ');

        if (memberEmail === '0') {
          break;
        }

        try {
          if (this.currentClub) {
            membershipDto = this.clubService.findMembership(this.currentClub.usid, memberEmail);
            console.log('\n> Found membership information: ', membershipDto);
            break;
          }
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
      }
      return membershipDto;
    }

    

}
export default MembershipConsole