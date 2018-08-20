import { Component, OnInit } from '@angular/core';
import { air_quality_service } from '../air-pollotion/AirQuality_services';
import { AirQuality_Modal_class } from './AirQuality_Modal';


@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {

  constructor(private airquality:air_quality_service) { }
_qualitydata:[AirQuality_Modal_class]
_TempData:[AirQuality_Modal_class]
_citylist=[];
  ngOnInit() {
    this.airquality.GetAirQualityIndex().subscribe((a)=>{
     this._qualitydata= a.json().records;
      for(var i = 0; i< this._qualitydata.length; i++){ 

        if(this._qualitydata[i].pollutant_id.toLowerCase()=="pm10"){
          let pm10Value=this._qualitydata[i].pollutant_avg;
          switch(true){
            case ((pm10Value>=0)&&(pm10Value<=50)):
            this._qualitydata[i].Polloution_state="Good";
            this._qualitydata[i].Polllution_Range="0-50";
            break;
            case ((pm10Value>50)&&(pm10Value<=100)):
            this._qualitydata[i].Polloution_state="Satisfactory ";
            this._qualitydata[i].Polllution_Range="51-100";
            break;
            case ((pm10Value>100)&&(pm10Value<=200)):
            this._qualitydata[i].Polloution_state="Moderately_polluted";
            this._qualitydata[i].Polllution_Range="101-200";
            break;
            case ((pm10Value>200)&&(pm10Value<=300)):
            this._qualitydata[i].Polloution_state="Poor";
            this._qualitydata[i].Polllution_Range="201-300";
            break;

            case ((pm10Value>300)&&(pm10Value<=400)):
            this._qualitydata[i].Polloution_state="Very_Poor";
            this._qualitydata[i].Polllution_Range="301-400";
            break;


            case ((pm10Value>400)&&(pm10Value<=500)):
            this._qualitydata[i].Polloution_state="Severe";
            this._qualitydata[i].Polllution_Range="401-500";
            break;

            case ((pm10Value>500)):
            this._qualitydata[i].Polloution_state="Severe";
            this._qualitydata[i].Polllution_Range="401-500";
            break;
            default:
            this._qualitydata[i].Polloution_state="NA";
            this._qualitydata[i].Polllution_Range="NA";
            break;
          }
        }
        if(this._qualitydata[i].pollutant_id.toLowerCase()=="pm2.5"){

          let pm2_5Value=this._qualitydata[i].pollutant_avg;
          switch(true){
            case ((pm2_5Value>=0)&&(pm2_5Value<=30)):
            this._qualitydata[i].Polloution_state="Good";
            this._qualitydata[i].Polllution_Range="0-50";
            break;
            case ((pm2_5Value>30)&&(pm2_5Value<=60)):
            this._qualitydata[i].Polloution_state="Satisfactory ";
            this._qualitydata[i].Polllution_Range="51-100";
            break;
            case ((pm2_5Value>60)&&(pm2_5Value<=90)):
            this._qualitydata[i].Polloution_state="Moderately_polluted";
            this._qualitydata[i].Polllution_Range="101-200";
            break;
            case ((pm2_5Value>90)&&(pm2_5Value<=120)):
            this._qualitydata[i].Polloution_state="Poor";
            this._qualitydata[i].Polllution_Range="201-300";
            break;

            case ((pm2_5Value>120)&&(pm2_5Value<=250)):
            this._qualitydata[i].Polloution_state="Very_Poor";
            this._qualitydata[i].Polllution_Range="301-400";
            break;
            case ((pm2_5Value>250)):
            this._qualitydata[i].Polloution_state="Severe";
            this._qualitydata[i].Polllution_Range="401-500";
            break;
            default:
            this._qualitydata[i].Polloution_state="NA";
            this._qualitydata[i].Polllution_Range="NA";
            break;
          }
        }


        if(this._qualitydata[i].pollutant_id.toLowerCase()=="no2"){

          let no2Value=this._qualitydata[i].pollutant_avg;
          switch(true){
            case ((no2Value>=0)&&(no2Value<=40)):
            this._qualitydata[i].Polloution_state="Good";
            this._qualitydata[i].Polllution_Range="0-50";
            break;
            case ((no2Value>40)&&(no2Value<=80)):
            this._qualitydata[i].Polloution_state="Satisfactory ";
            this._qualitydata[i].Polllution_Range="51-100";
            break;
            case ((no2Value>80)&&(no2Value<=180)):
            this._qualitydata[i].Polloution_state="Moderately_polluted";
            this._qualitydata[i].Polllution_Range="101-200";
            break;
            case ((no2Value>180)&&(no2Value<=280)):
            this._qualitydata[i].Polloution_state="Poor";
            this._qualitydata[i].Polllution_Range="201-300";
            break;

            case ((no2Value>280)&&(no2Value<=400)):
            this._qualitydata[i].Polloution_state="Very_Poor";
            this._qualitydata[i].Polllution_Range="301-400";
            break;
            case ((no2Value>400)):
            this._qualitydata[i].Polloution_state="Severe";
            this._qualitydata[i].Polllution_Range="401-500";
            break;
            default:
            this._qualitydata[i].Polloution_state="NA";
            this._qualitydata[i].Polllution_Range="NA";
            break;
          }
        }


        if(this._qualitydata[i].pollutant_id.toLowerCase()=="nh3"){

          let nh3Value=this._qualitydata[i].pollutant_avg;
          switch(true){
            case ((nh3Value>=0)&&(nh3Value<=200)):
            this._qualitydata[i].Polloution_state="Good";
            this._qualitydata[i].Polllution_Range="0-50";
            break;
            case ((nh3Value>200)&&(nh3Value<=400)):
            this._qualitydata[i].Polloution_state="Satisfactory ";
            this._qualitydata[i].Polllution_Range="51-100";
            break;
            case ((nh3Value>400)&&(nh3Value<=800)):
            this._qualitydata[i].Polloution_state="Moderately_polluted";
            this._qualitydata[i].Polllution_Range="101-200";
            break;
            case ((nh3Value>800)&&(nh3Value<=1200)):
            this._qualitydata[i].Polloution_state="Poor";
            this._qualitydata[i].Polllution_Range="201-300";
            break;

            case ((nh3Value>1200)&&(nh3Value<=1800)):
            this._qualitydata[i].Polloution_state="Very_Poor";
            this._qualitydata[i].Polllution_Range="301-400";
            break;
            case ((nh3Value>1800)):
            this._qualitydata[i].Polloution_state="Severe";
            this._qualitydata[i].Polllution_Range="401-500";
            break;
            default:
            this._qualitydata[i].Polloution_state="NA";
            this._qualitydata[i].Polllution_Range="NA";
            break;
          }
        }


        if(this._qualitydata[i].pollutant_id.toLowerCase()=="so2"){

          let so2Value=this._qualitydata[i].pollutant_avg;
          switch(true){
            case ((so2Value>=0)&&(so2Value<=40)):
            this._qualitydata[i].Polloution_state="Good";
            this._qualitydata[i].Polllution_Range="0-50";
            break;
            case ((so2Value>40)&&(so2Value<=80)):
            this._qualitydata[i].Polloution_state="Satisfactory ";
            this._qualitydata[i].Polllution_Range="51-100";
            break;
            case ((so2Value>80)&&(so2Value<=380)):
            this._qualitydata[i].Polloution_state="Moderately_polluted";
            this._qualitydata[i].Polllution_Range="101-200";
            break;
            case ((so2Value>380)&&(so2Value<=800)):
            this._qualitydata[i].Polloution_state="Poor";
            this._qualitydata[i].Polllution_Range="201-300";
            break;

            case ((so2Value>800)&&(so2Value<=1600)):
            this._qualitydata[i].Polloution_state="Very_Poor";
            this._qualitydata[i].Polllution_Range="301-400";
            break;
            case ((so2Value>1600)):
            this._qualitydata[i].Polloution_state="Severe";
            this._qualitydata[i].Polllution_Range="401-500";
            break;
            default:
            this._qualitydata[i].Polloution_state="NA";
            this._qualitydata[i].Polllution_Range="NA";
            break;
          }
        }


        if(this._qualitydata[i].pollutant_id.toLowerCase()=="co"){

          let so2Value=this._qualitydata[i].pollutant_avg;
          switch(true){
            case ((so2Value>=0)&&(so2Value<=1.0)):
            this._qualitydata[i].Polloution_state="Good";
            this._qualitydata[i].Polllution_Range="0-1";
            break;
            case ((so2Value>1.0)&&(so2Value<=2.0)):
            this._qualitydata[i].Polloution_state="Satisfactory ";
            this._qualitydata[i].Polllution_Range="1-2";
            break;
            case ((so2Value>2.0)&&(so2Value<=10.0)):
            this._qualitydata[i].Polloution_state="Moderately_polluted";
            this._qualitydata[i].Polllution_Range="2-10";
            break;
            case ((so2Value>10)&&(so2Value<=17)):
            this._qualitydata[i].Polloution_state="Poor";
            this._qualitydata[i].Polllution_Range="10-17";
            break;

            case ((so2Value>17)&&(so2Value<=34)):
            this._qualitydata[i].Polloution_state="Very_Poor";
            this._qualitydata[i].Polllution_Range="17-34";
            break;
            case ((so2Value>34)):
            this._qualitydata[i].Polloution_state="Severe";
            this._qualitydata[i].Polllution_Range="34+";
            break;
            default:
            this._qualitydata[i].Polloution_state="NA";
            this._qualitydata[i].Polllution_Range="NA";
            break;
          }
        }


        if(this._qualitydata[i].pollutant_id.toLowerCase()=="ozone"){

          let so2Value=this._qualitydata[i].pollutant_avg;
          switch(true){
            case ((so2Value>=0)&&(so2Value<=50)):
            this._qualitydata[i].Polloution_state="Good";
            this._qualitydata[i].Polllution_Range="0-50";
            break;
            case ((so2Value>50)&&(so2Value<=100)):
            this._qualitydata[i].Polloution_state="Satisfactory ";
            this._qualitydata[i].Polllution_Range="51-100";
            break;
            case ((so2Value>100)&&(so2Value<=168)):
            this._qualitydata[i].Polloution_state="Moderately_polluted";
            this._qualitydata[i].Polllution_Range="100-168";
            break;
            case ((so2Value>168)&&(so2Value<=208)):
            this._qualitydata[i].Polloution_state="Poor";
            this._qualitydata[i].Polllution_Range="168-208";
            break;

            case ((so2Value>208)&&(so2Value<=748)):
            this._qualitydata[i].Polloution_state="Very_Poor";
            this._qualitydata[i].Polllution_Range="209-748";
            break;
            case ((so2Value>748)):
            this._qualitydata[i].Polloution_state="Severe";
            this._qualitydata[i].Polllution_Range="748+";
            break;
            default:
            this._qualitydata[i].Polloution_state="NA";
            this._qualitydata[i].Polllution_Range="NA";
            break;
          }
        }
      }
      this._TempData= this._qualitydata;  
        console.log(this._qualitydata);
        for(var i = 0; i< this._qualitydata.length; i++){    
          if(this._citylist.indexOf(this._qualitydata[i].city) === -1){
            this._citylist.push(this._qualitydata[i].city);        
          }  
        }
    })
  }
  onCityChange(selected_city){
    
   
    this._qualitydata=this.filterByCity(this._TempData,selected_city)
 
  
  }

  filterByCity(data, s) {
  
    return data.filter(e => e.city.includes(s) )
        .sort((a,b) => a.city.includes(s) && !b.city.includes(s) ? -1 : b.city.includes(s) && !a.city.includes(s) ? 1 :0);
  }
}
