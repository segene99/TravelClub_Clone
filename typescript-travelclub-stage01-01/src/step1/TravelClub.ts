//클래스 생성
class TravelClub {
    name: string; //멤버 변수타입 지정 및 생성. 타입지정 시, 생성자 필요
    intro: string;

    //생성자 멤버변수를 받은 매개변수로 초기화
    constructor(name: string, intro: string){
        this.name = name;
        this.intro = intro;
    }

    get clubInfo() {
        return 'club name: ${this.name}, intro: ${this.intro}';
    }
    
    //tellMeAboutYou메소드 생성. 리턴타입 void
    tellMeAboutYou(): void {
        console.log(this.clubInfo);
    }
    
}
export default TravelClub;
