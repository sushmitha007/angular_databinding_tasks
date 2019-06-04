import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  textFromComponent2:string;
  constructor() { }

  ngOnInit() {
  }
  onEnteringText(event){
    this.textFromComponent2= event;
  }
}
