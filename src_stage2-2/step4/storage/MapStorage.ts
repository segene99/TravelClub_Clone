import TravelClub from "../../step1/TravelClub"

class MapStorage{
    
    clubMap: Map<string, TravelClub>;
    private static instance: MapStorage

    private constructor(){
        this.clubMap = new Map<string, TravelClub>;
    }

    static getInstance(): MapStorage{
        if(!this.instance){
            this.instance = new MapStorage();
        }
        return this.instance;
    }

}
export default MapStorage