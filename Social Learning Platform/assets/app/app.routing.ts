import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from './homepage/homepage.component';
import {CoursesComponent} from "./courses/courses.component";
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";
import {CourseEditComponent} from "./courses/course-edit/course-edit.component";
import {SignUpComponent} from './auth/signUp/signUp.component';
import {LoginComponent} from './auth/login/login.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent, pathMatch: 'full' },
    { path: 'courses', component: CoursesComponent,pathMatch: 'full'},
    // { path: 'courses/new', component: CourseEditComponent, pathMatch: 'full' },
    { path: 'create-content', component: CourseEditComponent, pathMatch: 'full' },
    { path: 'courses/:id', component: CourseDetailComponent,pathMatch: 'full'},
    {path: 'courses/:id/edit', component: CourseEditComponent,pathMatch: 'full'},
    {path: 'signUp', component: SignUpComponent,pathMatch: 'full'},
    {path: 'login', component: LoginComponent,pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);