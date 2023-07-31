import { question } from 'readline-sync';

class ClubConsole{

    constructor(){

    }

    showMenu1(): void{
        let inputNumber = 0;

        while(true){
            this.displayMainMenu();
            inputNumber = this.selectMenu();
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
                    console.log('choose again');
            }
           
                
        };

    };
    
    displayMainMenu(): void{
        console.log('1. register');
        console.log('2. find');
        console.log('3. findAll');
        console.log('0. exit');
    };

    selectMenu(): number{
        const answer = question('choose number');
        const menuNumber = parseInt(answer);
        return menuNumber;
    }

    register(): void{
        console.log('register');
    }

    find(): void{
        console.log('find');     
    }

    findAll(): void{
        console.log('findAll')
    }

    exitProgram(): void{
        console.log('bye');
        process.exit(0);
    }


};
export default ClubConsole;