import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';
import {DropdownDirective} from './Shared/dropdown.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { CourseStartComponent } from './courses/course-start/course-start.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import {CourseService} from './courses/course.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseItemComponent,
    DropdownDirective,
    CourseStartComponent,
    CourseEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
