import { Component, OnInit } from '@angular/core';
import { Test } from './Test';

@Component({
  selector: 'TestComponent',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(private test:Test) { }

  ngOnInit() {
  }
 
  firstname:string="nara";
  lastname:string="Jadiyannavar";
  dateObj:Date=new Date();
  TestOutput:string=this.test.TestMethod()
  
}
