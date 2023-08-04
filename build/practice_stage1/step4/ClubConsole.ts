import { defaultMaxListeners } from "events";
import { question } from "readline-sync";
import ClubCoordinator from "./ClubCoordinator";
import { NullLiteral } from "typescript";
import TravelClub from "./TravelClub";

class ClubConsole{
    clubCoordinator: ClubCoordinator;

    constructor(){
        this.clubCoordinator = new ClubCoordinator;
    }

    showMenu(): void{
        let inputNumber = 0;

        while(true){

            this.displayMainMenu();
            inputNumber = this.selectMainMenu();
    
            switch(inputNumber){
                case 1:
                    this.register();
                    break;
                case 2:
                    this.find();
                    break;
                case 3:
                    this.findAll();
                    break;
                case 0:
                    this.exitProgram();
                    return;
                default:
                    console.log('bye');
            }

        }
        

    }

    displayMainMenu(): void{
        console.log('--Travel Club--')
        console.log('1. register')
        console.log('2. find')
        console.log('3. findAll')
        console.log('0. exit program')
        console.log('---------------')
    }

    selectMainMenu(): number{
        const answer = question('select number');

        if(answer.length !== 1){
            console.log('it must be one digit, but it\s -->', answer);
        }

        if(answer === '0' || answer === '1' || answer === '2' || answer === '3'){
            return parseInt(answer);
        } else {
            console.log('input a valid digit');
            return -1;
        }

        const menuAnswer = parseInt(answer);
        return menuAnswer;
    }

    register(): void{
        const inputName = question('input club name');
        let name = inputName;

        if(!name || !name.length){
            console.log('club name cannot be empty');
            return;
        }

        if(this.clubCoordinator.exist(name)){
            console.log('already existed club name');
            return;
        }

        const introInput = question('input intro for your club');
        let intro = introInput;
        if(!intro || !intro.length){
            console.log('intro cannot be empty');
            return;
        }

        intro = intro.trim();

        const newClub = new TravelClub(name, intro);

        if(this.clubCoordinator.register(newClub) == true){
            console.log("registered club: " + name + ' , ' + 'intro of club: ' + intro);
        }

    }

    find(): void{
        let clubName = '';
        
        while(true){
            clubName = this.findMenuandGetInput();

            if(clubName === '0'){
                return;
            }

            let travelClub = null;

            travelClub = this.clubCoordinator.find(clubName);

            if(travelClub){
                console.log('Club founded: ' + travelClub)
            } else {
                console.log('No such a club: ' + clubName)
            }
        }
        
    }

    findMenuandGetInput(): string{
        if(!this.clubCoordinator.hasClubs()){
            console.log('\n> No clubs in the storage. try again');
            return '0';
        }

        const clubName = question('\n input club name(0. previous menu): ');

        return clubName.trim();
    }

    findAll(): void{
        if(this.clubCoordinator.hasClubs()){
            console.log('\n>No clubs in the storage. try again');
            return;
        }

        let clubs =[];

        clubs = this.clubCoordinator.findAll();
        console.log('\n> Found ' + clubs.length + 'clubs');

        for(const club of clubs){
            console.log('\n> list of clubs founded: ', club);
        }

    }

    exitProgram(): void{
        console.log('bye');
        process.exit(0);
    }


}
export default ClubConsole