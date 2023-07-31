class TravelClub2{

    name: string;
    intro: string;

    constructor(name: string, intro: string){
        this.name = name;
        this.intro = intro;

    }

    get clubInfo(){
        return 'club name: ${this.name}, intro: ${this.intro}';
    }

    TellMeAboutYou(){
        console.log(this.clubInfo);
    }
}
export default TravelClub2