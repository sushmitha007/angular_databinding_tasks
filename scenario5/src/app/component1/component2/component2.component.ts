import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  enteredText: string;
  @Output() newText = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onEnteringText(event: string) {
    this.enteredText = event;
    console.log("Inside Component2 " + this.enteredText);
    this.newText.emit(this.enteredText);
  }

}
