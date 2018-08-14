import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-two-way-binding-test',
  templateUrl: './two-way-binding-test.component.html',
  styleUrls: ['./two-way-binding-test.component.css']
})

export class TwoWayBindingTestComponent implements OnInit {
  _valueOfModel:any;
 constructor() { }
// constructor() { }
  ngOnInit() {
   
  }

  OnNgModalChange(userinfo:NgModel){
this._valueOfModel=userinfo;
console.log(userinfo)
  }
}
