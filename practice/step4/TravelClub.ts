class TravelClub{
    name: string;
    intro: string;

    constructor(name: string, intro: string){
        this.name = name; this.intro = name;   
    }
    
    get clubInfo(){
        return 'club name: ${this.name}, ${this.intro}';
    }

    tellYourClubInfo(){
        console.log(this.clubInfo);
    }

}
export default TravelClub