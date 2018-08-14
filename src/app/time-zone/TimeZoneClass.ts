import { Injectable } from "@angular/core";
import { Http,Headers, RequestOptions,RequestOptionsArgs, Jsonp } from "@angular/http";
import {map} from "rxjs/operators"
import { TimeZones } from "./TimeZoneModal";


const _headers=new Headers();
_headers.append("X-AppApiKey","A4PPMSV001:9QxMhKNDHBabavdShJ6dSkL75qXwyKdhuqAWrLar1mo=")
_headers.append('Content-Type', 'application/jsop');
const req=new RequestOptions({ headers: _headers});


@Injectable()
export class Timezoneinfo{
    constructor(private _response:Http){}
//private _timezoneurl="http://qapetspms.activdoctorsconsult.com:8082/api/GetTypes/Get/?Type=TimeZone";
private _timezoneurl="http://localhost:56452/api/GetTypes/Get/?Type=TimeZone";

GetTimeZoneList(){

    return this._response.get(this._timezoneurl,{ headers: _headers}).pipe(map(p=>{
        let _responses:TimeZones[]=p.json();
        console.log(_responses);
        return _responses;
    }
       
    ))

}

}
