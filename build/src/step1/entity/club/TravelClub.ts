import DateUtil from "../../../util/DateUtil";
import ClubMemberShip from "./ClubMembership";

class TravelClub{
  

    private readonly minimum_name_length = 3;
    private readonly minimum_intro_length = 11;

    name: string = '';
    intro: string = '';
    foundDate: string ='';
    clubid: string = '';
    boardId: string = '';
    membershipList: ClubMemberShip[] = [];
    usid: string = '';

    constructor(name: string, intro: string){
        this.setName(name);
        this.setIntro(intro);
        this.foundDate = DateUtil.today();
    }
    setName(name: string){
        if(name.length < this.minimum_name_length){
            console.log('it cannot be shorter than ' + this.minimum_name_length);
        }
        this.name = name;
    }
    setIntro(intro: string){
        if(intro.length < this.minimum_intro_length){
            console.log('it cannot be shorter than ' + this.minimum_intro_length);
        }
        this.intro = intro;
    }

    static getSample(key: boolean): TravelClub{
        const name = 'segene club';
        const intro = 'Welcome to segene club';
        const club = new TravelClub(name, intro);
        if(key){
            const seq = 10;
            club.setAutoId(seq.toString());
        }
        return club;
    }
    setAutoId(seq: string) : void{
        this.clubid = seq;
    }

    getId(): string{
        return this.clubid;
    }


}
export default TravelClub