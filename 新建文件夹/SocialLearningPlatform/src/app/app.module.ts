import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import {SortService} from './services/sort.service';
import { SortComponent } from './sort/sort.component';

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
