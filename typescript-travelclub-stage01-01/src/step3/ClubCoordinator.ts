import TravelClub from "./TravelClub";


class clubCoordinator{
    clubs: TravelClub[];

    constructor(clubs: TravelClub[]){
        this.clubs = []
    }

    exist(name: string): boolean {
        for(let i=0; i<this.clubs.length; i++){
            if(this.clubs[i] !== undefined || this.clubs[i].name === name){
                return true;
            }
        }
        return false;
    }
    //객체로 받음
    register(newClub: TravelClub): string{
        //중복체크 한번 더
        const foundClub = this.exist(newClub.name);

        if(foundClub){
            return '0';
        }

        this.clubs.push(newClub);

        return newClub.name;

    }



    hasClubs(): boolean{
        if(this.clubs.length !== 0){
            return true;
        }
        return false;
    }
    //검색 기능 수행
    find(clubName: string): TravelClub | null {
        for(let i =0; i< this.clubs.length; i++){
            if(this.clubs[i].name === clubName){
                return this.clubs[i];
            }
        }
        return null;
    }
    //배열로 반환
    findAll(): TravelClub[] {
        return this.clubs;
    }

}
export default clubCoordinator