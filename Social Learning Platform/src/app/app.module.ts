import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SortComponent } from './sort/sort.component';

import {SortService} from "./services/sort.service";

@NgModule({
  declarations: [
    AppComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
