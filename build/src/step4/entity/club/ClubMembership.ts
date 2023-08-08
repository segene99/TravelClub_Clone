import DateUtil from '../../../util/DateUtil';
import CommunityMember from './CommunityMember';
import RoleInClub from './RoleInClub';
import TravelClub from './TravelClub';


class ClubMembership {
    //28. 멤버 선언
    clubId: string = '';
    memberEmail: string = '';
    role: RoleInClub = RoleInClub.Member;
    joinDate: string = '';

    constructor(clubId: string, memberEmail: string) {
      //29. 받은값 21과 namoosori@test.co.kr로 초기화 및 joinDate DateUtil에서 today를 호출하여 설정
      this.clubId = clubId;
      this.memberEmail = memberEmail;
      this.joinDate = DateUtil.today();
    }

    static getSample(club: TravelClub, member: CommunityMember): ClubMembership {
      //26. 받아온 club에서 getId를 호출한 값(21)과 member 객체에 정의된 email값(namoosori@test.co.kr)을 보내어 ClubMembership으로 객체생성하여 membership에 정의
      const membership = new ClubMembership(club.getId(), member.email);

      //30. enum RoleInClub에 정의된 'Member'로  membership 객체의 role의 값 정의
      membership.role = RoleInClub.Member;

      //31. ClubMembership 객체인 membership 리턴
      return membership;
    }

}
export default ClubMembership;
