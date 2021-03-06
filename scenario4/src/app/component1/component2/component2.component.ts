import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  text:string;
  @Output() newText = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.text);
    this.newText.emit(this.text);
  }

}
