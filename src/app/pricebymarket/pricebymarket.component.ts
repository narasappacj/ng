import { Component, OnInit } from '@angular/core';
import { MandiPriceComponent } from '../mandi-price/mandi-price.component';
import { mandiprice } from '../mandi-price/pricelist';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pricebymarket',
  templateUrl: './pricebymarket.component.html',
  styleUrls: ['./pricebymarket.component.css']
})
export class PricebymarketComponent implements OnInit {

  constructor(private mandiservice:mandiprice){}
_itemlist:any[];
_allItem:any[];
_itemResult:any[];
  ngOnInit() {
    this.mandiservice.GetMandiPriceList().subscribe((p)=>{
      var lookup = {};
  var commudity_lookup = {};
  this._allItem=p.json();
var items = p.json();
var commodityList=[];
for (var item, i = 0; item = items[i++];) 
{
 
var commodityt=item.commodity;
 if (!(commodityt in commudity_lookup)) {
  commudity_lookup[commodityt] = 1;
  commodityList.push(commodityt);
}
}
this._itemlist=commodityList.sort();
console.log(this._itemlist);
this.SerachPricebyCommuidy(this._itemlist[0])
    })
  }
  SerchPrice(f:NgForm){
    
    if(f.valid){
console.log(f.value["drpcommudity"]);
    }
  }

  SerachPricebyCommuidy(selectedval){
  console.log(selectedval)
   this._itemResult= this.mandiservice.filterByItem(this._allItem,selectedval)
   console.log(this._itemResult)
  }
}
