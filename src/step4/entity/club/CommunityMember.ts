import Entity from '../Entity';
import Address from './Address';
import ClubMembership from './ClubMembership';


class CommunityMember implements Entity {
    //14. 커뮤니티멤버 필드 정의
    email: string = '';
    name: string = '';
    nickName: string = '';
    phoneNumber: string = '';
    birthDay: string ='';

    addresses: Address[] = [];
    membershipList: ClubMembership[] = [];

    constructor(email: string, name: string, phoneNumber: string) {
      //15. email, name, phoneNumber를 받은 값으로 초기화
      this.email = email;
      this.name = name;
      this.phoneNumber = phoneNumber;
    }

    getId(): string {
      return this.email;
    }

    static getSample(): CommunityMember {
      //13. email, name, phoneNumber값을 보내 Community 객체를 생성하여 member에 정의
      const member = new CommunityMember('namoosori@test.co.kr', 'Minsoo Lee', '010-3321-1001');

      //16. 필드 정의
      member.nickName = 'Min';
      member.birthDay = '2001.09.23';
      //17. Address 클래스의 getHomeAddressSample 호출하여 값초기화된 Address 객체를 받아서 addresses array에 push하여 마지막 인덱스에 넣기
      member.addresses.push(Address.getHomeAddressSample());

      //23. Address 객체를 담은 CommunityMember 객체인 member를 리턴.
      return member;
    }

}

export default CommunityMember;

