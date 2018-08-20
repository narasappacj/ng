import { Component, OnInit } from '@angular/core';
import { air_quality_service } from './AirQuality_services';
import { AirQuality_Modal } from './Air_modal';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-air-pollotion',
  templateUrl: './air-pollotion.component.html',
  styleUrls: ['./air-pollotion.component.css']
})
export class AirPollotionComponent implements OnInit {

  constructor(private index_ratio:air_quality_service,private _pagetitle:Title) { }
   _airQuality:[AirQuality_Modal]
   _TempData:[AirQuality_Modal];
    _citylist=[];
   _statelist=[];
   _pollutantlist=[];
  ngOnInit() {
    
  this.index_ratio.GetAirQualityIndex().subscribe((a)=>{
 this._TempData=a.json().records;
    this._airQuality=a.json().records;
   
    
    this._pagetitle.setTitle(a.json().desc)
    for(var i = 0; i< this._airQuality.length; i++){    
      if(this._citylist.indexOf(this._airQuality[i].city) === -1){
        this._citylist.push(this._airQuality[i].city);        
      }  
      
      if(this._statelist.indexOf(this._airQuality[i].state) === -1){
        this._statelist.push(this._airQuality[i].state);        
      }  
      
      if(this._pollutantlist.indexOf(this._airQuality[i].pollutant_id) === -1){
        this._pollutantlist.push(this._airQuality[i].pollutant_id);        
      }    
  }
  })
  }
  onStateChange(selectedstate){
    
   
    this._airQuality=this.filterByState(this._TempData,selectedstate)
    this._citylist=[];
    this._pollutantlist=[];
    for(var i = 0; i< this._airQuality.length; i++){    
     
      if(this._citylist.indexOf(this._airQuality[i].city) === -1){
   
        this._citylist.push(this._airQuality[i].city);        
      }  
      
      // if(this._statelist.indexOf(this._airQuality[i].state) === -1){
      //   this._statelist.push(this._airQuality[i].state);        
      // }  
    
      if(this._pollutantlist.indexOf(this._airQuality[i].pollutant_id) === -1){
        this._pollutantlist.push(this._airQuality[i].pollutant_id);        
      }    
  }
  }

  onCityChange(selected_city){
    
   
    this._airQuality=this.filterByCity(this._TempData,selected_city)
 
    this._pollutantlist=[];
    for(var i = 0; i< this._airQuality.length; i++){    
     
      if(this._pollutantlist.indexOf(this._airQuality[i].pollutant_id) === -1){
        this._pollutantlist.push(this._airQuality[i].pollutant_id);        
      }    
  }
  }

  onPollutantChange(selected_Item){
    
   
    this._airQuality=this.filterByPollutant(this._airQuality,selected_Item)
 
  }
  filterByState(data, s) {
  
    return data.filter(e => e.state.includes(s) )
        .sort((a,b) => a.state.includes(s) && !b.state.includes(s) ? -1 : b.state.includes(s) && !a.state.includes(s) ? 1 :0);
 }
 filterByCity(data, s) {
  
  return data.filter(e => e.city.includes(s) )
      .sort((a,b) => a.city.includes(s) && !b.city.includes(s) ? -1 : b.city.includes(s) && !a.city.includes(s) ? 1 :0);
}

filterByPollutant(data, s) {
  console.log(data);
  return data.filter(e => e.pollutant_id.includes(s) )
      .sort((a,b) => a.pollutant_id.includes(s) && !b.pollutant_id.includes(s) ? -1 : b.pollutant_id.includes(s) && !a.pollutant_id.includes(s) ? 1 :0);
}
}
