import TravelClub from "../entity/club/TravelClub";

interface ClubStore{
    delete(usid: string): void;
    exists(usid: string): boolean;
    update(arg0: TravelClub): void;
    retrieveByUsId(usid: string): TravelClub | null;
    create(club: TravelClub): string;
    retrieveByName(name: string): TravelClub | null;

}
export default ClubStore