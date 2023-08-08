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
    addMembership() {
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
    findClub() {
        throw new Error('Method not implemented.');
    }
    find() {
        throw new Error('Method not implemented.');
    }
    modify() {
        throw new Error('Method not implemented.');
    }
    remove() {
        throw new Error('Method not implemented.');
    }

}
export default ClubMembershipConsole