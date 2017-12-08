import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { AuthComponent} from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signUp/signUp.component';
import { LogoutComponent } from './auth/logout/logout.component';

import {DropdownDirective} from './Shared/dropdown.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {CourseService} from './courses/course.service';
import {AuthService} from './auth/auth.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomepageComponent,
        CoursesComponent,
        CourseListComponent,
        CourseItemComponent,
        CourseDetailComponent,
        CourseEditComponent,
        DropdownDirective,
        AuthComponent,
        LoginComponent,
        SignUpComponent,
        LogoutComponent
    ],
    imports: [
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpModule
    ],
    providers: [CourseService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}