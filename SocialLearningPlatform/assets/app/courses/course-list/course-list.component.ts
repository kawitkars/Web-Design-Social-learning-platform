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
export class CourseListComponent implements OnInit, OnDestroy {

    private courses: Course[];
    subscription: Subscription;

    constructor(private courseService: CourseService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.courseService.coursesChanged
            .subscribe(
                (courses: Course[]) => {
                    this.courses = courses;
                }
            );
        this.courses = this.courseService.getCourses();
    }

    onNewCourse() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
