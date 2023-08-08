import ClubMemberShip from "../../step1/entity/club/ClubMembership";
import CommunityMember from "../../step1/entity/club/CommunityMember";
import RoleInClub from "../../step1/entity/club/RoleInClub";
import TravelClub from "../../step1/entity/club/TravelClub";
import ClubService from "../service/ClubService";
import ClubDTO from "../service/dto/ClubDTO";
import MembershipDTO from "../service/dto/MembershipDTO";
import MapStorage from "./storage/MapStorage";

class ClubServiceLogic implements ClubService{

    clubMap: Map<string, TravelClub>
    autoIdMap: Map<string, number>;
    memberMap: Map<string, CommunityMember>;

    constructor(){
        this.clubMap = MapStorage.getInstance().clubMap;
        this.autoIdMap = MapStorage.getInstance().autoIdMap;
        this.memberMap = MapStorage.getInstance().memberMap;
    }
    
    findByName(clubName: string): ClubDTO {
        const foundClub = this.retrevieByName(clubName);

        if(!foundClub){
            console.log('no club exists under the name' + clubName)
        }
        if(foundClub !== null){
            return ClubDTO.toClubDTO(foundClub);
        }
        throw new Error('no such club by ' + clubName);
    }
    retrevieByName(clubName: string): TravelClub | null {

        //19. clubs라는 clubMap 값들로 이루어진 새로운 array 생성 = 값복사
        const clubs = Array.from(this.clubMap.values());

        if (!clubs.length) {
        return null;
        }
        //20. clubs 배열에서 each element를 club으로 받아 club의 name이 name과 같은 club을 반환
        return clubs.find(club => club.name === clubName) || null;
    }

    modify(targetClub: ClubDTO): void {
        const clubId = targetClub.usid;
        const club = this.clubMap.get(clubId);

        if(!club){
            console.log('no club found under id: ', clubId);
            return;
        }
        if(!targetClub.name && club !== undefined){
            targetClub.name = club.name;
        }
        if(!targetClub.intro && club !== undefined){
            targetClub.intro = club.intro;
        }

        this.clubMap.set(clubId, targetClub.toTravelClub());
    }
    remove(usid: string): void {
        if(!this.clubMap.get(usid)){
            throw new Error('No such club with id --> ' + usid);
        }
        this.clubMap.delete(usid);
    }
    showMenu(): void {
        throw new Error("Method not implemented.");
    }

    register(clubDto: ClubDTO): void {
        const foundClub = this.getByName(clubDto.name);

        if(foundClub){
            console.log('club already exists');
            return;
        }

        const club = clubDto.toTravelClub();
        const clubName = TravelClub.name;

        if('getId' in club || 'setAutoId' in club){
            if(this.autoIdMap.get(clubName) ===  undefined){
                this.autoIdMap.set(clubName, Number(club.getId()));
            }
        }

        let keySeq = this.autoIdMap.get(clubName);

        if(keySeq !== undefined){
            const autoId = keySeq.toString();
            club.setAutoId(autoId);
            this.autoIdMap.set(clubName, ++keySeq);
        }
        this.clubMap.set(club.getId(), club);
        clubDto.usid = club.getId();
    }
    getByName(name: string): TravelClub | null {
        const clubs = Array.from(this.clubMap.values());

        if(!clubs.length){
            return null;
        }

        return clubs.find(club => club.name === name) || null;

    }
    addMembership(membershipDto: MembershipDTO): void {
        //membershipDto에서 받은 이메일로 memberMap에서 해당되는 맴버를 찾아 중복체크
        const memberId = membershipDto.memberEmail;
        const foundMember = this.memberMap.get(memberId);
        if(!foundMember){
            console.log('such member not found');
        }
        const clubId = membershipDto.clubId;
        const foundClub = this.clubMap.get(clubId);
        if(!foundClub){
            console.log('such club not found');
        }
         //foundClub에 membershipList을 membership으로 하나씩 때와서 email비교 해서 해당되는 element 담음
        const membership = foundClub?.membershipList.find(membership => membership.memberEmail === memberId);
        if(membership){
            console.log('membership already exists');
        }
        //membership 등록
        const clubMemberShip = membershipDto.toClubMembership();
        //맴버쉽등록된 멤버쉽 클럽정보에 push해서 update
        foundClub?.membershipList.push(clubMemberShip);
        if(foundClub !== undefined){
            this.clubMap.set(clubId, foundClub);
        }
        //맴버쉽등록된 멤버쉽 멤버정보에 push해서 update
        foundMember?.membershipList.push(clubMemberShip);
        if(foundMember !== undefined){
            this.memberMap.set(memberId, foundMember);
        }

    }
    findMembership(clubId: string, memberId: string): MembershipDTO | null {
        const foundClub = this.clubMap.get(clubId);
        let membership = null;
  
        if (foundClub) {
          membership = this.getMembershipOfClub(foundClub, memberId);
        }
  
        return membership ? MembershipDTO.toMembershipDTO(membership) : membership;
    }
    getMembershipOfClub(foundClub: TravelClub, memberId: string): ClubMemberShip {
        for(const membership of foundClub.membershipList){
            if(membership.memberEmail === memberId){
                return membership;
            }
        }
        throw new Error(`No such member[${memberId}] in club [${foundClub.name}]`);
    }
    modifyMembership(clubId: string, membershipDto: MembershipDTO): void {
        
        const targetEmail = membershipDto.memberEmail;
        const newRole = membershipDto.role;
  
        const targetClub = this.clubMap.get(clubId);
  
        if (targetClub) {
        //CommunityMember 객체인 targetMember의 membershipList에서 membershipOfMember.clubId와 받아온 clubId가 같으면 반환된 membershipOfMember에 role과 newRole이 같도록 update.
          const membershipOfClub = this.getMembershipOfClub(targetClub, targetEmail);
  
          membershipOfClub.role = newRole as RoleInClub;
        }

        const targetMember = this.memberMap.get(targetEmail);
  
        if (targetMember) {
          targetMember.membershipList.filter(membershipOfMember => membershipOfMember.clubId === clubId).map(membershipOfMember => membershipOfMember.role = newRole);
  
          this.memberMap.set(targetMember.getId(), targetMember);
        }

    }
    removeMembership(clubId: string, memberId: string): void {
        throw new Error("Method not implemented.");
    }


}
export default ClubServiceLogic