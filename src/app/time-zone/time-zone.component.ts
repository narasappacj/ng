import { Component, OnInit } from '@angular/core';
import { Timezoneinfo } from './TimeZoneClass';
import { TimeZones } from './TimeZoneModal';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {

  constructor(private _timezonelist:Timezoneinfo) { }
_List_of_Time_Zones:TimeZones[]
  ngOnInit() {
   this._timezonelist.GetTimeZoneList().subscribe((t)=>{
     this._List_of_Time_Zones=t;
     console.log(this._List_of_Time_Zones)
    })
  }

}
