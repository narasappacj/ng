import { Injectable } from "@angular/core";
import { Jsonp, URLSearchParams, Http } from "@angular/http";  
// headers:Headers
@Injectable()
export class CountrList{
    constructor(private jsonp: Http) { }  
    private countrylisturl = 'https://restcountries.eu/rest/v2/all';  
    GetCountryList(){

        let params = new URLSearchParams();  
       
        params.set('format', 'json');  
        params.set('callback', 'JSONP_CALLBACK'); 
      return this.jsonp.get(
          this.countrylisturl
      );
    }
}
