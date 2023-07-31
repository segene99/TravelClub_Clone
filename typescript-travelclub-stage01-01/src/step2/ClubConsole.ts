import { question } from 'readline-sync';

class ClubConsole{

    constructor(){

    }

    //showMenu 메소드 생성 void
    showMenu(): void{

        //inputNumber 지역변수 선언
        let inputNumber = 0;

        //무한루프
        while(true){

            //mainmenu 띄우는 디스플레이 메소드 호출
            this.displayMainMenu();

            //선택된 숫자를 기준으로 inpurNumber에 저장
            inputNumber = this.selectMainMenu();

                switch (inputNumber){
                    case 1:
                        this.register();
                        break;
                    case 2:
                        this.find();
                    case 3:
                        this.findAll();
                    case 0:
                        this.exitProgram();
                        return;
                    default:
                        console.log("choose again!");
                }
            }
        }

        displayMainMenu(): void{
            console.log('options');
            console.log('1. register');
            console.log('2. find');
            console.log('3. find all');
            console.log('4. exit program');
        }

        selectMainMenu(): number{
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
            console.log('findAll');
        }

        exitProgram(): void{
            console.log('bye');
            process.exit(0);
        }

        }
        export default ClubConsole;