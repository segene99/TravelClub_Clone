import { question } from "readline-sync";
import ClubCoordinator from "./ClubCoordinator";
import TravelClub from "./TravelClub";

class ClubConsole{

    clubCoordinator: ClubCoordinator

    constructor(){
        this.clubCoordinator = new ClubCoordinator();
    }

    showMenu(){

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
                    console.log('Choose Again!');
                }

        }

    }
    selectMainMenu(): number {

    // 유저 input
        const answer = question('Select number: ');

    // 유효성 체크(input 길이)
      if (answer.length !== 1) {
        console.log('only one digit allowed, but it\'s ' + answer);
        return -1;
      }

    // 유효성 체크(input이 valid option chosen or not)
      if (answer === '0' || answer === '1' || answer === '2' || answer === '3') {
        return parseInt(answer);
      }
      else {
        console.log('try again');
        return -1;
      }

    }

    displayMainMenu(): void {
        //
        console.log('Travel Club Menu');
        console.log(' 1. register');
        console.log(' 2. find');
        console.log(' 3. find All');
        console.log(' 0. exit program');
        console.log('------------------.');
      }

      exitProgram(): void {
        //
        console.log('exit the program now');
        process.exit(0);
      }

      register(): void {
        //
        const answer = question('\n Input Club Name: ');
        let clubName = answer;
  
        clubName = clubName.trim();
  
        if (!clubName || !clubName.length) {
          console.log('Club name should not be null.');
          return;
        }
  
        if (this.clubCoordinator.exist(clubName)) {
          console.log('\n> Club name already exists. --> ' + clubName);
          return;
        }
  
        let clubIntro = question(' Input Club Intro: ');
  
        if (!clubIntro || !clubIntro.length) { 
          return;
        }
        clubIntro = clubIntro.trim();
  
        const newClub = new TravelClub(clubName, clubIntro);
        const isRegistered = this.clubCoordinator.register(newClub);
  
        if (isRegistered) {
          console.log('\n> Registered club: ', newClub);
        }
        else {
          console.log('\n> Sorry, fail to register the club.');
        }
      }

      find(): void {
        //
        let clubName = '';
  
        while (true) {

            if(this.clubCoordinator.hasClubs()){
                console.log('no club found');
                return;
            }  
             if (clubName === '0') {
            return;
          }
  
          let travelClub = null;
  
          travelClub = this.clubCoordinator.find(clubName);
  
          if (travelClub) {
            console.log('\n> Found club: ', travelClub);
          }
          else {
            console.log('\n> No such a club: ' + clubName);
          }
        }
      }

      findAll(): void {
        //
        if (!this.clubCoordinator.hasClubs()) {
          console.log('\n> No clubs in the storage');
          return;
        }
  
        let clubs = [];
  
        clubs = this.clubCoordinator.findAll();
        console.log('\n> Found ' + clubs.length + ' clubs.');
  
        for(const club of clubs) {
            console.log('\n> Found club: ' , club);
        }
      }


} export default ClubConsole