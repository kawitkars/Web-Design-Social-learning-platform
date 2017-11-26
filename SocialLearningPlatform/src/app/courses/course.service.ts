import {Subject} from 'rxjs/Subject';
import {Course} from './course.model';




export class CourseService {

  coursesChanged = new Subject<Course[]>();

  private courses: Course[] = [
    new Course('Web Design', 'Prof Anish', 'This is simply a test course', 'https://upload.wikimedia.org/' +
      'wikipedia/commons/thumb/1/10/' +
      'CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'),
    new Course('Web Development', 'Prof Anish', 'This is simply a test course', 'https://upload.wikimedia.org/' +
      'wikipedia/commons/thumb/1/10/' +
      'CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'),
    new Course('Web', 'Prof', 'This is simply a test course', 'https://upload.wikimedia.org/' +
      'wikipedia/commons/thumb/1/10/' +
      'CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png')
  ];

  getCourses() {
    return this.courses.slice();
  }

  getCourse(index: number) {
    return this.courses[index];
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.coursesChanged.next(this.courses.slice());
  }

  updateCourse(index: number, newCourse: Course) {
    this.courses[index] = newCourse;
    this.coursesChanged.next(this.courses.slice());
  }

  deleteCourse(index: number) {
    this.courses.splice(index, 1);
    this.coursesChanged.next(this.courses.slice());
  }

}
