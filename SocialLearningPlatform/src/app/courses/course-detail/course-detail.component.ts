import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Course} from '../course.model';
import {CourseService} from '../course.service';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  id: number;

  constructor( private courseService: CourseService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.course = this.courseService.getCourse(this.id);
        }
      );
  }

  onEditCourse() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteCourse() {
    this.courseService.deleteCourse(this.id);
    this.router.navigate(['/courses']);
  }

}
