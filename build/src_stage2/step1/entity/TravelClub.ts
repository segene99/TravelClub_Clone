import DateUtil from '../../util/DateUtil';
import ClubMember from './ClubMember';


class TravelClub {
    //name과 intro 길이설정
    private readonly MINIMUM_NAME_LENGTH: number = 3;
    private readonly MINIMUM_INTRO_LENGTH: number = 10;

    name: string = '';
    intro: string = '';
    foundedDate: string = '';

    members: ClubMember[] = [];

    constructor(name: string, intro: string) {
      //프로퍼티 초기화
      this.setName(name);
      this.setIntro(intro);
      this.foundedDate = DateUtil.today();
    }

    setName(name: string): void {
      //유효성 체크(name 길이 제한)
      if (name.length < this.MINIMUM_NAME_LENGTH) {
        throw new Error('\n> Name should be longer than ' + this.MINIMUM_NAME_LENGTH);
      }
      this.name = name;
    }

    setIntro(intro: string): void {
      //유효성 체크(intro 길이 제한)
      if (intro.length < this.MINIMUM_INTRO_LENGTH) {
        throw new Error('\n> Intro should be longer than ' + this.MINIMUM_INTRO_LENGTH);
      }
      this.intro = intro;
    }

}
export default TravelClub;
