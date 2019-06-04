import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Scenario7Service {
  text:string;
  constructor() { }
  setText(enteredText:string): Observable<string> {
    this.text=enteredText;
    console.log('service'+this.text)
    return of(this.text)
  }
  getText():Observable<string>{
    return of(this.text)
  }
}
