import { question } from "readline-sync";

class ClubConsole1{

        showMenu(): void{
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
                        console.log('try again!');
                }


            }

        }

        displayMainMenu(){
            console.log('1. register');
            console.log('2. find');
            console.log('3. findAll');
            console.log('0. exitProgram');
        }

        selectMenu(): number{
            const answer = question('choose number');
            const menuSelected = parseInt(answer);
            return menuSelected;
        }

        register(){
            //유효성 체크
            //NULL , 중복체크
            const input = question('input club name');
            let clubName = answer;
            
            if(!input || !input.length ){
                console.log('club name cannot be null');
                return;
            }
            
            

        }
        find(){

        }
        findAll(){

        }
        exitProgram(){

        }
}