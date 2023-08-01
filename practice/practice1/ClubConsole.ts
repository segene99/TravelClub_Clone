import { question } from "readline-sync";
import ClubCoordinator from "./ClubCoordinator";
import TravelClub from "./TravelClub";

class ClubConsole{

    clubCoordinator: ClubCoordinator

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
                    console.log('try again');

            }

            

        }

        

    }
    exitProgram(): void {
        this.clubCoordinator.exitProgram();
    }
    findAll() : void{

        let clubs = [];

        if(this.clubCoordinator.hasClubs()){
            console.log('no club found');
            return;
        }

        clubs = this.clubCoordinator.findAll();

        console.log('\n> number of clubs found: ' + clubs.length);

        for(const club of clubs){
            console.log('\n> clubs found> name: ' + club.name + ', intro: ' + club.intro);
        }

    }
    find() : void{
        let clubName = '';

        if(this.clubCoordinator.hasClubs()){
            console.log('no club found');
            return;
        }

        const inputName = question('enter club name');
        let input = inputName;
        input = input.trim();

        if(!input.length || !input){
            console.log('club intro cannot be null');
            return;
        }

        const club = this.clubCoordinator.find(inputName);

        if(club?.name === inputName){
            console.log('club found: ' + club.name);
        } else {
            console.log('no such club found');
        }


        

    }
    register(): void {
        const clubName = question('enter club name: ');
        let clubNameInput = clubName;
        if(!clubName.length || !clubName){
            console.log('club name cannot be null');
            return;
        }

        clubNameInput = clubNameInput.trim();

        if(this.clubCoordinator.exist(clubNameInput)){
            console.log('already registered club');
            return;
        }

        const intro = question('enter club intro: ');
        let introInput = intro;

        if(!introInput.length || !introInput){
            console.log('club name cannot be null');
            return;
        }

        const newClub = new TravelClub(clubNameInput, introInput);
        
        if(this.clubCoordinator.register(newClub) === 1){
            console.log('registered club: ' + newClub.name + ', registered intro: ' + newClub.intro);
        } else {
            console.log('registeration failed')
            return;
        }
        

    }
    selectMainMenu(): number{
        const input = question('choose number on the menu: ');

        if(input.length !== 1){
            console.log('only on digit number allowed. try again');
            return -1;
        }

       if(input === '0' || input === '1' || input === '2' || input === '3'){
            return(parseInt(input));
       } else {
        console.log('please enter valid number on the menu');
        return -1;
       }

       return -1;
    }
    displayMainMenu(): void{
        console.log('Travel Club');
        console.log('1. register');
        console.log('2. find');
        console.log('3. findAll');
        console.log('0. exit');
        console.log('-----------');
    }


}
export default ClubConsole