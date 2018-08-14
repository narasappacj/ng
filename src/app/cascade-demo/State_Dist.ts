import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { state } from "./stateModel";
import { HttpResponse } from "selenium-webdriver/http";
import { Observable } from "rxjs";
import { Body } from "@angular/http/src/body";

@Injectable()
export class StateDist{
constructor(private http:Http){}

private StatelistUrl="http://api.nightlights.io/months/1993.3-1993.4/states";
loadstateList(){
     
    return this.http.get(this.StatelistUrl)
}

private distlistUrl="http://api.nightlights.io/months/1993.3-1993.4/states/"
GetDistListBystate(stateName:string){
    if(stateName!=null){
    
    return this.http.get(this.distlistUrl+stateName.toLowerCase()+"/districts")
    }
    else{
        return this.http.get(this.distlistUrl+"gujarat/districts")
    }
}
}