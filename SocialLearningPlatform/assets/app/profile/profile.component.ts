
import {Component, Input, OnInit} from "@angular/core";

import { Course} from "../courses/course.model";
import { CourseService } from "../courses/course.service";
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {
    private photo: SafeStyle;

    @Input() course: Course;

    constructor(private courseService: CourseService, private sanitizer: DomSanitizer) {}

    onEditArticle() {
        this.courseService.editCourse(this.course);

    }

    onDeleteArticle() {
        this.courseService.deleteCourse(this.course)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.course.userId;
    }

    ngOnInit() {
        this.photo = '/assets/image/bg-img-3.jpg';
    }

}
