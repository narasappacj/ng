import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AirQuality_Modal } from "./Air_modal";

@Injectable()

export class air_quality_service{
    constructor(private reponse:Http){}
    private serviceurl="https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd00000119fc43acbf3c4c1d4ab4b93d464b2f56&format=json&offset=0&limit=733"

    GetAirQualityIndex(){
        return this.reponse.get(this.serviceurl)
    }

    filterByState(data, s) {
        return data.filter(e => e.state.includes(s) )
            .sort((a,b) => a.state.includes(s) && !b.state.includes(s) ? -1 : b.state.includes(s) && !a.state.includes(s) ? 1 :0);
     }
}