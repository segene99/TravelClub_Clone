import DateUtil from "../util/DateUtil";
import ClubMember from "./ClubMember";

class TravelClub {

    private readonly minimum_name_length = 3;
    private readonly minimum_intro_length = 9;

    name: string ='';
    intro: string ='';
    foundedDate: string = '';

    members: ClubMember[] = [];

    constructor(name: string, intro: string){
        this.setName(name);
        this.setIntro(intro);
        this.foundedDate = DateUtil.today();
    }
    setName(name: string) {
        if(name.length < this.minimum_name_length){
            console.log('name must be longer than ' +  this.minimum_name_length);
        }
        this.name = name;
    }
    setIntro(intro: string) {
        if(intro.length < this.minimum_intro_length){
            console.log('intro must be longer than ' +  this.minimum_intro_length);
        }
    }

}
export default TravelClub