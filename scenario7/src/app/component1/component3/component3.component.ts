import { Component, OnInit } from '@angular/core';
import { Scenario7Service } from 'src/app/shared/scenario7.service';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  enteredTextFromSibling:string;
  constructor(private scenario7Service:Scenario7Service) {
    console.log('inside')
    this.scenario7Service.getText().subscribe(res=>this.enteredTextFromSibling=res);
    console.log(this.enteredTextFromSibling);
   }

  ngOnInit() {
  }
  getText(){
    console.log('inside')
    this.scenario7Service.getText().subscribe(res=>this.enteredTextFromSibling=res);
    console.log(this.enteredTextFromSibling);

  }

}
