import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {CourseStartComponent} from './courses/course-start/course-start.component';
import {CourseDetailComponent} from './courses/course-detail/course-detail.component';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent, children: [
    {path: '', component: CourseStartComponent},
    {path: 'new', component: CourseEditComponent},
    {path: ':id', component: CourseDetailComponent},
    {path: ':id/edit', component: CourseEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
