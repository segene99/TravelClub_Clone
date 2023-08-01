import { question } from "readline-sync";
import ClubWindow from "../console/ClubWindow";
import MemberMenu from "./MemberMenu";

class ClubMenu {

    clubWindow: ClubWindow;
    memberMenu: MemberMenu;

    constructor(){
        this.clubWindow = new ClubWindow();
        this.memberMenu = new MemberMenu();
    }

    showMenu(){
        let inputNumber = 0;
        while(true){

            this.displayMainMenu();
            inputNumber = this.selectMainMenu();

            switch(inputNumber){
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
        console.log('travel club menu');
        console.log('1. register');
        console.log('2. find');
        console.log('3. findAll');
        console.log('4. modify');
        console.log('5. remove');
        console.log('6. showMemberMenu'); 
        console.log('0. exit program');
        console.log('----------------')
    }

}
export default ClubMenu