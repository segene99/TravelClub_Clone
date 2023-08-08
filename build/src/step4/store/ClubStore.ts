import TravelClub from "../entity/club/TravelClub";

interface ClubStore{
    delete(usid: string): void;
    exists(usid: string): boolean;
    update(arg0: TravelClub): void;
    retrieve(usid: string): TravelClub | null;
    create(club: TravelClub): string;
    retrieveByName(name: string): TravelClub | null;

}
export default ClubStore