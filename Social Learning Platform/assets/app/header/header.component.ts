import {Component, Input} from '@angular/core';

import { Course } from '../courses/course.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Input() course: Course;
}