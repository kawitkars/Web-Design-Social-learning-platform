import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
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

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

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
      'name': new FormControl(courseName),
      'imagePath': new FormControl(courseImagePath),
      'instructorName': new FormControl(courseInstructorName),
      'description': new FormControl(courseDescription)
    });
  }

}