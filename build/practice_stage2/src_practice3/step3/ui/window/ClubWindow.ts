import { question } from "readline-sync";
import TravelClub from "../../../step1/TravelClub";
import ClubCoordinator from "../../logic/ClubCoordinator";
import DateUtil from "../../../util/DateUtil";

class ClubWindow {
    
    clubCoordinator: ClubCoordinator
    
    constructor(clubCoordinator: ClubCoordinator) {
        this.clubCoordinator = clubCoordinator;
    }
    register(): TravelClub | null {
        let newClub = null;
        while(true){
            const clubName = question('enter club name(0.go back to club menu)');

            if(clubName === '0' || !clubName){
                break;
            }
            if(this.clubCoordinator.exist(clubName)){
                console.log('already existing name');
                continue;
            }

            const clubIntro = question('enter club intro(0.go back to club menu)');

            if(clubIntro === '0'){
                break;
            }

            try{
                newClub = new TravelClub(clubName, clubIntro);
                newClub.foundedDate = DateUtil.today();
                if(this.clubCoordinator.register(newClub) == true){
                    console.log('Club registration complete: registered club is ', newClub);
                    return newClub;
                } else{
                    console.log('registration failed');
                }

            }
            
            catch(e){
                console.error(`Error: ${(e as Error).message}`)
            }
        }
        return null;
    }
    find(): TravelClub | null {

        let clubFounded = null;

        if(!this.clubCoordinator.hasClubs()){
            console.log('no clubs registered')
            return null;            
        }

        while(true){
            const clubName = question('enter club name(0. go to club menu)');

            if(clubName == '0'){
                break;
            }

            clubFounded = this.clubCoordinator.find(clubName);

            if(clubFounded == null){
                console.log('no such club as ' + clubName);
                continue;
            } else {
                console.log('Club founded: ',  clubFounded);
            }
        }

        return clubFounded;

    }

    findAll(): void {
       let clublist: TravelClub[] = this.clubCoordinator.findAll();
       console.log('\n> --club list--')
       for(const club of clublist){
        console.log('\n>' + club);
       }
    }

    findTarget(): TravelClub | null{
        let clubFounded = null;

        if(!this.clubCoordinator.hasClubs()){
            console.log('no clubs registered')
            return null;            
        }

        while(true){
            const clubName = question('enter club name(0. go to club menu)');

            if(clubName == '0'){
                break;
            }

            clubFounded = this.clubCoordinator.find(clubName);

            if(clubFounded == null){
                console.log('no such club as ' + clubName);
                continue;
            } else {
                console.log('Club founded: ',  clubFounded);
                break;
            }

        }

        return clubFounded;

    }
    modify(): TravelClub | null {

        const targetClub = this.findTarget();

        //부적합 검사
        if(!targetClub){
            return targetClub;
        }

        let newName = null;
        while(true){
            newName = question('enter the club name you want(0.club menu / Enter. no change)');
            if(newName === '0'){
                break;
            }

            if(!newName.length){
                newName = targetClub.name;
                break;
            }

            if(this.clubCoordinator.exist(newName)){
                console.log('\n> Already existing name');
                continue;
            }

            break;
        }

        let newIntro = question('enter the club intro you want(0.club menu / Enter. no change)')
        
        if(newIntro === '0'){
           return targetClub;
        }

        if(!newIntro.length){
            newIntro = targetClub.intro;
        }

        targetClub.name = newName;
        targetClub.intro = newIntro;
        targetClub.foundedDate = DateUtil.today();

        if(this.clubCoordinator.modify(targetClub) == null){
            console.log('modification failed')
            return null;
        }

        return targetClub;
    }
   

    remove(): void{
        const targetClub = this.findTarget();

        if(!targetClub){ return;}

        const input = question('Remove this club? (1: yes, 0: no)');
        const answer = parseInt(input);
        if(answer === 1){
            this.clubCoordinator.remove(targetClub);
        } else {
            console.log('removal failed. club remained: ' + targetClub);
        }
    }
   
}
export default ClubWindow