import { Component, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';
import { CountrList } from './MyServices';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private list_of_countries:CountrList) { }
_countryList:any;
  ngOnInit() {
    this.list_of_countries.GetCountryList().subscribe((p:any)=>{
      
       this._countryList=JSON.parse(p._body);    
    });
    }
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
  pagelist=[{"Id":10,"Name":"10 per Page"},{"Id":20,"Name":"20 per Page"},{"Id":30,"Name":"30 per Page"},{"Id":40,"Name":"40 per Page"},{"Id":50,"Name":"50 per Page"},{"Id":100,"Name":"100 per Page"},{"Id":-1,"Name":"Show All"}];
//   Page_Size_Chanege(event:HTMLSelectElement){
//     let a:HTMLSelectElement=event.target;
//     console.log(a.selectedOptions); // It will display the select city data
// }
pgesize:number=10;
Page_Size_ChanegeNew(pageselected){
  console.log(pageselected[0].value);
  this.pgesize=pageselected[0].value;
}

}
