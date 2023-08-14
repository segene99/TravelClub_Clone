import { question } from "readline-sync";
import ServiceLogics from "../../logic/ServiceLogics";
import ClubService from "../../service/ClubService";
import ClubDto from "../../service/dto/ClubDto";
import ClubMembership from "../../entity/club/ClubMembership";
import ClubMembershipDto from "../../service/dto/ClubMembershipDto";
import RoleInClub from "../../entity/club/RoleInClub";

class ClubMembershipConsole{

    clubService: ClubService
    currentClub: ClubDto | null = null;

    constructor(){
        this.clubService = ServiceLogics.shareInstance().createClubService();
    }

    hasCurrentClub(): string | null {
        if(this.currentClub !== null){
            return this.currentClub.name;
        }
        return null
    }
    addMembership(): void {
        const email = question('\n member\'s email to add (0.Member menu): ');

        if (email === '0') {
          return;
        }
        const memberRole = question(' President|Member: ');

          try {
            if (this.currentClub) {
              const clubMembership = new ClubMembership(this.currentClub.usid, email);
              const clubMembershipDto = new ClubMembershipDto(clubMembership.clubId, clubMembership.memberEmail);
    
              clubMembershipDto.role = memberRole as RoleInClub;
    
              this.clubService.addMembership(clubMembershipDto);
              console.log(`\n> Add a member[email:${email}] in club[name:${this.currentClub.name}]`);
            }
          }
          catch (e) {
            if(e instanceof Error) {
              console.error(`Error: ${e.message}`);
            }
          }
    }
    findClub(): void {
      const name = question('enter club name to find');
      if(name === '0'){
        return;
      }
      const clubFound = this.clubService.findByName(name);
      this.currentClub = clubFound;
    }
    findMembership(): void {
      if (!this.hasCurrentClub()) {
        console.log('> No target club yet. Find target club first.');
        return;
      }    
      while (true) {
        const memberEmail = question('\n email to find (0.Membership menu): ');

        if (memberEmail === '0') {
          break;
        }

        try {
          if (this.currentClub) {
            const membershipDto = this.clubService.findMembership(this.currentClub.usid, memberEmail);

            console.log('\n> Found membership information: ', membershipDto);
          }
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
      }
    }
    modifyMembership(): void {
      if (!this.hasCurrentClub()) {
        //
        console.log('\n> No target club yet. Find target club first.');
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

      if (newRole) {
        targetMembership.role = newRole as RoleInClub;
      }
      const clubId = targetMembership.clubId;
      this.clubService.modifyMembership(clubId, targetMembership);

      const modifyMembership = this.clubService.findMembership(clubId, targetMembership.memberEmail);

      console.log('\n> Modified membership information: ', modifyMembership);

    }
    findOne(): ClubMembershipDto | null {
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
          }
          break;
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
      }
      return membershipDto;
    }
    removeMembership(): void {
      if (!this.hasCurrentClub()) {
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

}
export default ClubMembershipConsole