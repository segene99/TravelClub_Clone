import { question } from "readline-sync";
import ClubWindow from "../console/ClubWindow";
import MemberMenu from "./MemberMenu";

class ClubMenu{

    clubWindow: ClubWindow;
    memberMenu: MemberMenu;

    constructor(){
        this.clubWindow = new ClubWindow();
        this.memberMenu = new MemberMenu();
    }

    showMenu():void {
        let inputNum = 0;

        while(true){

            this.displayMainMenu();
            inputNum = this.selectMainMenu();

            switch(inputNum){
                case 1:
                    this.clubWindow.register();
                    break;
                case 2:
                    this.clubWindow.find();
                    break;
                case 3:
                    this.clubWindow.findAll();
                    break;
                case 4:
                    this.clubWindow.modify();
                    break;
                case 5:
                    this.clubWindow.remove();
                    break;
                case 6:
                    this.memberMenu.showMenu();
                    break;
                case 0:
                    this.exitProgram();
                default:
                    console.log('try again');
            }

        }


    }
    displayMainMenu() {
        console.log('---Club Menu---');
        console.log('1. register');
        console.log('2. find');
        console.log('3. find all');
        console.log('4. modify');
        console.log('5. remove');
        console.log('6. show member menu');
        console.log('0. exit program');
        console.log('---------------');
    }
    selectMainMenu(): number {
        const answer = question('enter number on the main menu');
        const numSelected = parseInt(answer);

        if(!numSelected){
            console.log('the input cannot be blanked');
            return -1;
        }

        if(numSelected >= 0 || numSelected <= 6){
            return numSelected;
        } else {
            console.log('enter valid number');
        }

        return -1;
    }

    exitProgram(): void{
        console.log('exit program');
        process.exit(0);
    }


}
export default ClubMenu