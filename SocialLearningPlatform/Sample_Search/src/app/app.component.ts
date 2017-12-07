import { Component } from '@angular/core';
import {FilterPipeTrial} from './pipes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String;
  coursename:any;
  Author:any;
  list:any;
  searchableList:any;
  constructor(){
    this.title = "Search for the courses";
        this.list = [{coursename:'HTML & CSS',Author:'Gauri Chavan'},
        {coursename:'Angular JS',Author:'Anish Surti'},
           {coursename:'MVC',Author:'Sneha Kawitkar'},
           {coursename:'Javascript',Author:'Neha Bhangale'},
           {coursename:'Typescript',Author:'Abhiruchi Karwa'},
           {coursename:'MEAN Stack developement',Author:'Anubhuti'},
           {coursename:'SASS',Author:'Dhanisha'},]
           this.searchableList = ['coursename','Author']
  }
}
