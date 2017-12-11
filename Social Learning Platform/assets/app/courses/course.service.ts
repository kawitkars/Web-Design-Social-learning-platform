import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


import {Course} from './course.model';

@Pipe({
    name: 'CourseService',
})


@Injectable()
export class CourseService implements PipeTransform{

    private courses: Course[] = [];
    
    courseIsEdit = new EventEmitter<Course>();

    constructor(private http: Http) {
    }

    getCourseByName(search: any) {
        console.log(search);
        return this.http.get('http://localhost:3000/courses/?search='+search)
            .map((response: Response) => {
                console.log(response);
                // return response.json();
                
            });
    }
    
    transform(value: any, input: string,searchableList:any) {
        console.log(input);
        console.log(value);
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                var isTrue = false;
                for(var k in searchableList ){
                    if(el[searchableList[k]].toLowerCase().indexOf(input) > -1){
                    isTrue = true;
                    }
                    if(isTrue){
                    return el
                    }
                    }
            })
        }
        return value;
    }
    

    addCourse(course: Course) {
        const body = JSON.stringify(course);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/course' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const course = new Course(
                    result.obj.courseName,
                    result.obj.instructorName,
                    result.obj.description,
                    result.obj.imagePath,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.courses.push(course);
                return course;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

  getCourses() {
      return this.http.get('http://localhost:3000/course')
          .map((response: Response) => {
              const courses = response.json().obj;
              let transformedCourses: Course[] = [];
              for (let course of courses) {
                  transformedCourses.push(new Course(
                      course.courseName,
                      course.instructorName,
                      course.description,
                      course.imagePath,
                      course.user.firstName,
                      course._id,
                      course.user._id)
                  );
              }
              this.courses = transformedCourses;
              return transformedCourses;
          })
          .catch((error: Response) => Observable.throw(error.json()));
  }

  getCourse(index: number) {
    return this.courses[index];
  }



    updateCourse(course: Course) {
        const body = JSON.stringify(course);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/course/' + course.courseId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editCourse(course: Course) {
        this.courseIsEdit.emit(course);
    }

  deleteCourse(course: Course) {
      this.courses.splice(this.courses.indexOf(course), 1);
      const token = localStorage.getItem('token')
          ? '?token=' + localStorage.getItem('token')
          : '';
      return this.http.delete('http://localhost:3000/course/' + course.courseId + token)
          .map((response: Response) => response.json())
          .catch((error: Response) => Observable.throw(error.json()));
  }

}
