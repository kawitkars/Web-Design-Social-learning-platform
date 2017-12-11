import {Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Course} from '../course.model';
import {CourseService} from '../course.service';





@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  private courses: Course[];
  subscription: Subscription;
  search: string;
  finalCourses = [];

  constructor(private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
        // this.route.params.subscribe(
        //     params => {
        //        this.search = params['search'];
        //        console.log(this.search); 
        //     }
        // )

        this.search = this.route.snapshot.queryParams['search'];

        if(this.search) {
            console.log('inside search!');
            this.courseService.getCourses()
            .subscribe(
                (courses: Course[]) => {
                    for(let i=0; i<courses.length; i++) {
                        if(courses[i].courseName.toUpperCase().indexOf(this.search.toUpperCase()) > -1) {
                            this.finalCourses.push(courses[i]);
                        }
                    }
                    this.courses = this.finalCourses;
                }
            );
        } else {
            this.courseService.getCourses()
            .subscribe(
                (courses: Course[]) => {
                    this.courses = courses;
                }
            );
        }      
  }
}
