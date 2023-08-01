import DateUtil from "../../../src_stage2/util/DateUtil";
import ClubMember from "./ClubMember";

class TravelClub{
    private readonly MINIMUM_NAME_LENGTH: number = 3;
    private readonly MINIMUM_INTRO_LENGTH: number = 10;

    name : string = '';
    intro : string = '';
    foundedDate: string = '';
    members: ClubMember[] = [];

    constructor(name: string, intro: string){
        this.setName(name);
        this.setIntro(intro);
        this.foundedDate = DateUtil.today();
    }
    setIntro(intro: string) {
        if(intro.length < this.MINIMUM_INTRO_LENGTH){
            throw new Error("intro should be longer than " + this.MINIMUM_INTRO_LENGTH);
        }
        this.intro = intro;
    }
    setName(name: string) {
        if(name.length <  this.MINIMUM_NAME_LENGTH){
           throw new Error ('name should be longer than ' + this.MINIMUM_NAME_LENGTH);
        }
        this.name = name;
    }
}
export default TravelClub