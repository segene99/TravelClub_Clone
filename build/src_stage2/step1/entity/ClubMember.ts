import RoleInClub from './RoleInClub';


class ClubMember {
    //멤버정보
    email: string = '';
    name: string = '';
    nickname: string = '';
    phoneNumber: string = '';
    birthDay: string = '';
    role: RoleInClub = RoleInClub.Member; //Member 역할로 기본 설정

    constructor(email: string, name: string, phoneNumber: string) {
      //이메일정보 객체 초기화
      this.setEmail(email);
      this.name = name;
      this.phoneNumber = phoneNumber;
    }

    setEmail(email: string): void {
      //이메일 등록
      if (!this.isValidEmailAddress(email)) {
        throw new Error('이메일 형식이 잘못되었습니다 ----> ' + email);
      }
      this.email = email;
    }

    isValidEmailAddress(email: string): boolean {
      //이메일 유효성 검사
      // ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] = @전 부분 검사
      // (\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}) = IPv4 형식([192.168.0.1]) 혹은 그냥 도메인 이름 유효성 검사
      const ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";

      //match email객체와 패턴이 매치되는지 확인
      return !!email.match(ePattern); 
    }

    inviteLeader(): ClubMember {
      //President 역할 설정
      const leader = new ClubMember('test@test.co.kr', 'gil dong Hong', '010-0001-0001');

      leader.role = RoleInClub.President;
      return leader;
    }

    inviteMember(): ClubMember {
      //Member 역할 설정
      return new ClubMember('memberlee@nextree.co.kr', 'nara Lee', '010-0001-0002');
    }

}
export default ClubMember;
