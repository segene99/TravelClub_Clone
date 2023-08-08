import DateUtil from '../../../util/DateUtil';
import AutoIdEntity from '../AutoIdEntity';
import ClubMembership from './ClubMembership';


class TravelClub implements AutoIdEntity {
  //4. 클럽정보 필드 선언
    private readonly MINIMUM_NAME_LENGTH: number = 3;
    private readonly MINIMUM_INTRO_LENGTH: number = 10;

    usid: string = '';
    name: string = '';
    intro: string = '';
    foundationDate: string = '';

    boardId: string = '';
    membershipList: ClubMembership[] = [];

    constructor(name: string, intro: string) {
      //5. 3.에서 받은 name과 intro로 setName과 setIntro를 호출하여 초기화
      this.setName(name);
      this.setIntro(intro);
      this.foundationDate = DateUtil.today();
    }

    getId(): string {
      //27. 아까 정의된 21을 리턴
      return this.usid;
    }

    setAutoId(autoId: string): void {
      //8. 7.에서받은 21로 usid 초기화
      this.usid = autoId;
    }

    getMembershipBy(email: string): ClubMembership | null {
      //
      if (!email || !email.length) {
        return null;
      }

      let clubMembership;

      for (clubMembership of this.membershipList) {
        if (email === clubMembership.memberEmail) {
          return clubMembership;
        }
      }
      return null;
    }

    setName(name: string): void {
      //
      if (name.length < this.MINIMUM_NAME_LENGTH) {
        throw new Error('\n> Name should be longer than ' + this.MINIMUM_NAME_LENGTH);
      }
      this.name = name;
    }

    setIntro(intro: string): void {
      //
      if (intro.length < this.MINIMUM_INTRO_LENGTH) {
        throw new Error('\n> Intro should be longer than ' + this.MINIMUM_INTRO_LENGTH);
      }
      this.intro = intro;
    }

    static getSample(keyIncluded: boolean): TravelClub {
      //2. 샘플클럽과 인트로 선언 및 값설정
      const name = 'namoosori club';
      const intro = 'Welcome to namoosori club.';
      //3. TravelClub에 위의 name과 intro보내 객체 생성
      const club = new TravelClub(name, intro);

      //6. 1.에서 호출될때 받은 true값이 keyIncluded이므로 if문 탄다
      if (keyIncluded) {
        const sequence = 21;
        //7. sequence값 21을 문자형으로 보내 setAutoId 호출
        club.setAutoId(sequence.toString());
      }
      //9. 호출한 1.로 TravelClub 객체를 리턴해줌
      return club;
    }
}
export default TravelClub;
