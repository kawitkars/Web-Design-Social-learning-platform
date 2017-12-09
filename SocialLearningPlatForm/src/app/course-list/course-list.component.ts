import {Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Course} from '../../models/course';
import {CourseService} from '../services/course.service';





@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  private courses: Course[];
  subscription: Subscription;

  constructor(private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.courseService.getCourses()
          .subscribe(
              (courses: Course[]) => {
                  this.courses = courses;
              }
          );
  }
}