import { Component, OnInit } from '@angular/core';
import {Course} from '../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [
    new Course('Web Design', 'Prof Anish', 'This is simply a test course', 'https://upload.wikimedia.org/' +
      'wikipedia/commons/thumb/1/10/' +
      'CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png',
      'https://youtu.be/LO_xGTfCfSs')
  ];

  constructor() { }

  ngOnInit() {
  }

}
