import { Component, OnInit } from '@angular/core';
import { StateDist } from './State_Dist';

@Component({
  selector: 'app-cascade-demo',
  templateUrl: './cascade-demo.component.html',
  styleUrls: ['./cascade-demo.component.css']
})
export class CascadeDemoComponent implements OnInit {

  constructor(private stateservice:StateDist) { }
_statelist:any;
_distList:any[]=[];
  ngOnInit() {
this.stateservice.loadstateList().subscribe((p)=>{
  console.log(p.json());
this._statelist=p.json();
});
  }

  OnStateChange(selectedState){
   
this.stateservice.GetDistListBystate(selectedState[0].value).subscribe((s)=>{
  console.log(s.json());
  this._distList=s.json();
})
  }

}
