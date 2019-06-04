import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component1/component2/component2.component';
import { Component3Component } from './component1/component3/component3.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import{Scenario7Service} from './shared/scenario7.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [Scenario7Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
