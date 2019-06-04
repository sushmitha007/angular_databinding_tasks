import { Component, OnInit } from '@angular/core';
import { Scenario7Service } from 'src/app/shared/scenario7.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  text:string;
  constructor(private scenario7Service: Scenario7Service) { }

  ngOnInit() {
  }
  onSubmit(){
  this.scenario7Service.setText(this.text).subscribe(res=>this.text=res);
  console.log(this.text);

  }

}
