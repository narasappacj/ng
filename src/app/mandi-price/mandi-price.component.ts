import { Component, OnInit } from '@angular/core';
import { mandiprice } from './pricelist';

@Component({
  selector: 'app-mandi-price',
  templateUrl: './mandi-price.component.html',
  styleUrls: ['./mandi-price.component.css']
})
export class MandiPriceComponent implements OnInit {

  constructor(private pricelist:mandiprice) { }
  _mandidata:any;
_pricelist:any;
_statelist:any[];
_distList:any[]=[];
_marketlist:any[];
_commuditylist:any[]=[];
  ngOnInit() {
this.pricelist.GetMandiPriceList().subscribe((p)=>{
  this._mandidata=p.json();

  var lookup = {};
  var commudity_lookup = {};
var items = p.json();

//var dists=JSON.Search( p, '//*[? state == `"Andhra Pradesh"`].district' );
var state_list = [];
var distlist=[];
var commodityList=[];
for (var item, i = 0; item = items[i++];) 
{
  var name = item.state;
var commodityt=item.commodity;
  if (!(name in lookup)) {
    lookup[name] = 1;
    state_list.push(name);
    //this._statelist.push(name);
}

// if (!(commodityt in commudity_lookup)) {
//   commudity_lookup[commodityt] = 1;
//   commodityList.push(commodityt);
// }
  }

  this._statelist=state_list;
  // console.log(state_list);
  // console.log(commodityList);
  // console.log( this.pricelist.filterByString(items,"Assam"))
})

  }
  OnStateChangeMandi(selectedState){
   
    // this.pricelist.filterByString(this._mandidata,selectedState[0].value).subscribe((s)=>{
    
    //   this._distList=s.json();
    // }) 
    var tempdistlist=this.pricelist.filterByString(this._mandidata,selectedState[0].value)
    var lookup_dist = {};
    var distlist_temp=[];
 
    for (var item, i = 0; item = tempdistlist[i++];) 
    {
      var distname = item.district;
     
      if (!(distname in lookup_dist)) {
        lookup_dist[distname] = 1;
        distlist_temp.push(distname);
        
    }
  }
  
    // this._distList= this.pricelist.filterByString(this._mandidata,selectedState[0].value)
    // console.log(this._distList)
   this._distList=distlist_temp;
   

  }
 
  OnDistrictChange(dist){
    var marketlist=this.pricelist.filterBydist(this._mandidata,dist[0].value)
    var lookup_market = {};
    var distlist_market=[];
 
    for (var item, i = 0; item = marketlist[i++];) 
    {
      var marketname = item.market;
     
      if (!(marketname in lookup_market)) {
        lookup_market[marketname] = 1;
        distlist_market.push(marketname);
        
    }
  }
  this._marketlist=distlist_market
    
  }

  OnMarketChange(market){
    this._commuditylist=this.pricelist.filterBymarket(this._mandidata,market[0].value)
   // var commuditylist=this.pricelist.filterBymarket(this._mandidata,market[0].value)
    console.log(this._commuditylist)
  }
}