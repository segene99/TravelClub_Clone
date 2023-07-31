class TravelClub1{
    name: string;
    intro: string;

    get clubInfo(){
        return 'club name: ${this.name}, intro: ${this.intro}';
    }

    tellMeYourClub(){
        console.log(this.clubInfo);
    }

}