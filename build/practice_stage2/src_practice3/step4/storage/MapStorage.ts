import TravelClub from "../entity/TravelClub";

class MapStorage{

    private static instance: MapStorage;

    clubMap: Map<string, TravelClub>

    private constructor(){
        this.clubMap = new Map<string, TravelClub>;
    }

    public static getInstance(): MapStorage{
        if (!this.instance){
            this.instance = new MapStorage();
        }
        return MapStorage.instance;
    }

}
export default MapStorage