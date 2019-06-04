import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  text:string;
  @Output() newText = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("Inside component3 "+ this.text);
    this.newText.emit(this.text);
  }


}
