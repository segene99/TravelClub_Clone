import DateUtil from "../../../src_stage2/util/DateUtil";
import ClubMember from "./ClubMember";

class TravelClub{

    private readonly minimum_name_length = 3;
    private readonly minimum_intro_length = 10;

    name: string ='';
    intro: string ='';
    foundedDate: string ='';
    members: ClubMember[] = [];

    constructor(name: string, intro: string){
        this.foundedDate = DateUtil.today();
        this.setName(name);
        this.setIntro(intro);
    }
    setIntro(intro: string) {
        if(intro.length < this.minimum_intro_length){
            throw new Error("intro should be longer than " + this.minimum_intro_length);
        }
        this.intro = intro;
    }
    setName(name: string) {
        if(name.length < this.minimum_name_length){
            throw new Error("name should be longer than " + this.minimum_name_length);           
        }
        this.name = name;
    }
}
export default TravelClub