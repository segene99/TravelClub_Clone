import DateUtil from "../util/DateUtil";
import ClubMember from "./ClubMember";

class TravelClub{

    private readonly minimum_name_length: number = 3;
    private readonly minimum_intro_length: number = 10;

    name: string ='';
    intro: string ='';
    members: ClubMember[] = [];
    foundedDate: string = '';

    constructor(name: string, intro: string){
        this.setName(name);
        this.setIntro(intro);
        this.foundedDate = DateUtil.today();
    }
    setName(name: string) {
        if(name.length<this.minimum_name_length){
            console.log('club name should be longer than ' + this.minimum_name_length );
        }
        this.name = name;
    }
    setIntro(intro: string) {
        if(intro.length<this.minimum_intro_length){
            console.log('club intro should be longer than ' + this.minimum_intro_length );
        }    
        this.intro = intro;
    }
}
export default TravelClub