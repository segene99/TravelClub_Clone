import RoleInClub from "../entity/club/RoleInClub";
import TravelClub from "../entity/club/TravelClub";
import MapStores from "../map/MapStores";
import ClubService from "../service/ClubService";
import ClubDto from "../service/dto/ClubDto";
import ClubMembershipDto from "../service/dto/ClubMembershipDto";
import ClubStore from "../store/ClubStore";
import MemberStore from "../store/MemberStore";

class ClubServiceLogic implements ClubService{

    clubStore: ClubStore
    memberStore: MemberStore;

    constructor(){
        this.clubStore = MapStores.getInstance().requestClubStore();
        this.memberStore = MapStores.getInstance().requestMemberStore();
    }
    removeMembership(usid: string, memberEmail: string): void {
        const foundClub = this.clubStore.retrieveByUsId(usid);
         const foundMember = this.memberStore.retrieveByEmail(memberEmail);

      if (foundClub && foundMember) {
        const clubMembership = this.getMembership(foundClub, memberEmail);

        const clubIndex = foundClub.membershipList.indexOf(clubMembership);
        const memberIndex = foundMember.membershipList.indexOf(clubMembership);

        foundClub.membershipList.splice(clubIndex, 1);
        foundMember.membershipList.splice(memberIndex, 1);
      }
    }
    modifyMembership(clubId: string, ClubMembershipDto: ClubMembershipDto): void {
        const targetEmail = ClubMembershipDto.memberEmail;
        const newRole = ClubMembershipDto.role;
  
        const targetClub = this.clubStore.retrieveByUsId(clubId);

        if (targetClub) {
            const membershipOfClub = this.getMembership(targetClub, targetEmail);
    
            membershipOfClub.role = newRole as RoleInClub;
            targetClub.membershipList.filter(membershipOfClub => membershipOfClub.clubId === clubId)
                                       .map(membershipOfClub => membershipOfClub.role = newRole);
    
            this.clubStore.update(targetClub);
          }
          const targetMember = this.memberStore.retrieveByEmail(targetEmail);

          if (targetMember) {
            targetMember.membershipList.filter(membershipOfMember => membershipOfMember.clubId === clubId)
                                       .map(membershipOfMember => membershipOfMember.role = newRole);
    
            this.memberStore.update(targetMember);
          }

    }
    findMembership(usid: string, memberEmail: string): ClubMembershipDto | null {
        const foundClub = this.clubStore.retrieveByUsId(usid);
        let membership = null;
  
        if (foundClub) {
          membership = this.getMembership(foundClub, memberEmail);
        }
  
        return membership ? ClubMembershipDto.toMembershipDTO(membership) : membership;
    }
    getMembership(foundClub: TravelClub, memberEmail: string): any {
        for (const membership of foundClub.membershipList) {
            if (memberEmail === membership.memberEmail) {
    
              return membership;
            }
          }
          throw new Error(`No such member[${memberEmail}] in club [${foundClub.name}]`);    }

    addMembership(clubMembershipDto: ClubMembershipDto): void {
        const memberId = clubMembershipDto.memberEmail;

        const foundMember = this.memberStore.retrieveByEmail(memberId);
  
        if (!foundMember) {
          throw new Error('No such member with email: ' + memberId);
        }
  
        const foundClub = this.clubStore.retrieveByUsId(clubMembershipDto.clubId);
  
        if (!foundClub) {
          throw new Error('No such club with id: ' + clubMembershipDto.clubId);
        }
  
        const membership = foundClub.membershipList.find((membership) => memberId === membership.memberEmail);
  
        if (membership) {
          throw new Error('Member already exists in the club -->' + memberId);
        }
  
        // add membership
        const clubMembership = clubMembershipDto.toClubMembership();
  
        foundClub.membershipList.push(clubMembership);
        this.clubStore.update(foundClub);

        foundMember.membershipList.push(clubMembership);
        this.memberStore.update(foundMember);
     }
///////club service//////
    remove(usid: string): void {
        if (!this.clubStore.exists(usid)) {
            throw new Error('No such club with id: ' + usid);
          }
          this.clubStore.delete(usid);    
    }
    modify(clubDto: ClubDto): void {
        const foundClub = this.clubStore.retrieveByName(clubDto.name);

            if (foundClub) {
                throw new Error('Club already exists with name: ' + clubDto.name);
            }

            const targetClub = this.clubStore.retrieveByUsId(clubDto.usid);

            if (!targetClub) {
                throw new Error('No such club with id: ' + clubDto.usid);
            }

            if (!clubDto.name) {
                clubDto.name = targetClub.name;
            }
            if (!clubDto.intro) {
                clubDto.intro = targetClub.intro;
            }

            this.clubStore.update(clubDto.toTravelClub());    
    }
    findByName(clubName: string): ClubDto | null {
        const foundClub = this.clubStore.retrieveByName(clubName);

        if (!foundClub) {
          throw new Error('No such club with name: ' + name);
        }
        return ClubDto.toClubDto(foundClub);    
    }

    register(clubDto: ClubDto): void {
        const foundClub = this.clubStore.retrieveByName(clubDto.name);

        if (foundClub) {
          throw new Error('Club already exists with name: ' + clubDto.name);
        }
        const club = clubDto.toTravelClub();
        const clubId = this.clubStore.create(club);
  
        clubDto.usid = clubId;
    }


}
export default ClubServiceLogic