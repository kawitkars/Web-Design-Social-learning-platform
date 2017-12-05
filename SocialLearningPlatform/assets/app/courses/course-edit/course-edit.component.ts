import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../course.service';



@Component({
    selector: 'app-course-edit',
    templateUrl: './course-edit.component.html',
    styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
    id: number;
    editMode = false;
    courseForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private courseService: CourseService,
                private router: Router) { }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.editMode = params['id'] != null;
                    this.initForm();
                }
            );
    }

    onSubmit() {
        /*const newCourse = new Course(this.courseForm.value['courseName'],
          this.courseForm.value['imagePath'],
          this.courseForm.value['instructorName'],
          this.courseForm.value['description']);*/
        if (this.editMode) {
            this.courseService.updateCourse(this.id, this.courseForm.value);
        } else {
            this.courseService.addCourse(this.courseForm.value)
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                );
        }
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    private initForm() {

        let courseName = '';
        let courseImagePath = '';
        let courseInstructorName = '';
        let courseDescription = '';


        if (this.editMode) {
            const course = this.courseService.getCourse(this.id);
            courseName = course.courseName;
            courseImagePath = course.imagePath;
            courseInstructorName = course.instructorName;
            courseDescription = course.description;
        }

        this.courseForm = new FormGroup({
            'courseName': new FormControl(courseName, Validators.required),
            'imagePath': new FormControl(courseImagePath, Validators.required),
            'instructorName': new FormControl(courseInstructorName, Validators.required),
            'description': new FormControl(courseDescription, Validators.required)
        });
    }

}
