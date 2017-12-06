import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {CourseStartComponent} from './courses/course-start/course-start.component';
import {CourseDetailComponent} from './courses/course-detail/course-detail.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesComponent, children: [
        {path: '', component: CourseStartComponent, pathMatch: 'full'},
        {path: 'new', component: CourseEditComponent, pathMatch: 'full'},
        {path: ':id', component: CourseDetailComponent, pathMatch: 'full'},
        {path: ':id/edit', component: CourseEditComponent, pathMatch: 'full'}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
