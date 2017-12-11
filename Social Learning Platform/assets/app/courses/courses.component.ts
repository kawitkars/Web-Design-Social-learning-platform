import { Component, OnInit } from '@angular/core';
//import {CourseService} from './course.service'
import {Course} from './course.model'



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  searchableList:any;
  constructor() {
    this.searchableList = ['courseName','description']
   }

  ngOnInit() {
  }

}
