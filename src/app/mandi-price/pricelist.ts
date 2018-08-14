import { Injectable } from "@angular/core";
import { Http, Jsonp } from "@angular/http";
@Injectable()
export class mandiprice{
constructor(private returnval:Http){}
private mandippriceurl="https://data.gov.in/node/86943/datastore/export/json"
GetMandiPriceList(){
    return this.returnval.get(this.mandippriceurl);
   
}
filterByString(data, s) {
    return data.filter(e => e.state.includes(s) )
        .sort((a,b) => a.state.includes(s) && !b.state.includes(s) ? -1 : b.state.includes(s) && !a.state.includes(s) ? 1 :0);
 }
 filterBydist(data, s) {
    return data.filter(e => e.district.includes(s) )
        .sort((a,b) => a.district.includes(s) && !b.district.includes(s) ? -1 : b.district.includes(s) && !a.district.includes(s) ? 1 :0);
 }

 filterBymarket(data, s) {
    return data.filter(e => e.market.includes(s) )
        .sort((a,b) => a.market.includes(s) && !b.market.includes(s) ? -1 : b.market.includes(s) && !a.market.includes(s) ? 1 :0);
 }
 filterByItem(data, s) {
    return data.filter(e => e.commodity.includes(s) )
        .sort((a,b) => a.commodity.includes(s) && !b.commodity.includes(s) ? -1 : b.commodity.includes(s) && !a.commodity.includes(s) ? 1 :0);
 }
}
