import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from './homepage/homepage.component';
import { CourseComponent} from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { AuthComponent} from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import {SortComponent} from './sort/sort.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent, pathMatch: 'full' },
    { path: 'courses', component: CourseComponent,pathMatch: 'full'},
    // { path: 'courses/new', component: CourseEditComponent, pathMatch: 'full' },
    { path: 'create-content', component: CourseEditComponent, pathMatch: 'full' },
    { path: 'courses/:id', component: CourseDetailComponent,pathMatch: 'full'},
    {path: 'courses/:id/edit', component: CourseEditComponent,pathMatch: 'full'},
    {path: 'signUp', component: SignUpComponent,pathMatch: 'full'},
    {path: 'login', component: LoginComponent,pathMatch: 'full'},
    {path:'sort',component:SortComponent,pathMatch:'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);