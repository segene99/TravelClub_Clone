import { question } from "readline-sync";
import TravelClub from "../../../step1/TravelClub";
import MemberWindow from "../window/MemberWindow";

class MemberMenu{

    memberWindow: MemberWindow

    constructor(){{
        this.memberWindow = new MemberWindow();
    }}

    showMenu() {
        let inputNum = 0;
        while(true){

            this.displayMainMenu();
            inputNum = this.selectMainMenu();
            
            switch(inputNum){
                case 1:
                    this.memberWindow.findClub();
                    break;
                case 2:
                    this.memberWindow.add();
                    break;
                case 3:
                    this.memberWindow.find();
                    break;
                case 4:
                    this.memberWindow.modify();
                    break;
                case 5:
                    this.memberWindow.remove();
                    break;
                case 0:
                    this.exitProgram();
                default:
                    console.log('try again');

            }
        }


    }
    displayMainMenu() {
        console.log('---Member Menu---');
        console.log('1. find Club');
        console.log('2. add');
        console.log('3. find Member');
        console.log('4. modify');
        console.log('5. remove');
        console.log('0. exit program');
        console.log('---------------');
    }
    selectMainMenu(): number {
        const answer = question('enter number on the member menu');
        const numSelected = parseInt(answer);

        if(!numSelected){
            console.log('the input cannot be blanked');
            return -1;
        }

        if(numSelected >= 0 || numSelected <= 5){
            return numSelected;
        } else {
            console.log('Invalid number. Enter valid number');
        }

        return -1;
    }

    exitProgram(): void{
        console.log('exit program');
        process.exit(0);
    }


    
}
export default MemberMenu