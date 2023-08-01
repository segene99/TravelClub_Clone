import { question } from "readline-sync";
import MemberWindow from "../console/MemberWindow";

class MemberMenu{

    memberWindow: MemberWindow;

    constructor(){
        this.memberWindow = new MemberWindow();
    }

    showMenu(){
        let inputNumber = 0;

        while(true){
            this.displayMainMenu();
            inputNumber = this.selectMainMenu();

            switch(inputNumber){
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
                    return;
            }
        }

    }

    exitProgram(): void{
        console.log('exit the program. Bye');
        process.exit(0);
    }
    selectMainMenu(): number{
        const input = question('choose number on the menu');
        const menuPick = parseInt(input);

        if(menuPick >= 0 || menuPick <= 6){
            return menuPick
        }
        return -1;
    }
    displayMainMenu(): void{
        console.log('----------------')
        console.log('Member menu');
        console.log('1. findClub');
        console.log('2. add');
        console.log('3. find');
        console.log('4. modify');
        console.log('5. remove');
        console.log('0. exit program');
        console.log('----------------')
    }

}
export default MemberMenu