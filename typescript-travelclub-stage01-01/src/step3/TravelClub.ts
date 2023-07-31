class TravelClub{

    name: string;
    input: string;

    constructor(name: string, input: string){
        this.name = name;
        this.input = input;
    }

    get clubInfo(){
        return 'club name: ${this.name}, input: ${this.input}'
    }

    tellMeYourClub(): void{
        console.log(this.clubInfo);
    }

}
export default TravelClub