import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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

import {DropdownDirective} from './Shared/dropdown.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {CourseService} from '../app/services/course.service';
import {AuthService} from '../app/services/auth.service';
import {SortService} from '../app/services/sort.service';
import { SortComponent } from './sort/sort.component';

import {SelectModule} from 'ng2-select';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomepageComponent,
        CourseComponent,
        CourseListComponent,
        CourseItemComponent,
        CourseDetailComponent,
        CourseEditComponent,
        DropdownDirective,
        AuthComponent,
        LoginComponent,
        SignUpComponent,
        LogoutComponent,
        SortComponent
    ],
    imports: [
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpModule,
        SelectModule
    ],
    providers: [CourseService, AuthService,SortService],
    bootstrap: [AppComponent]
})
export class AppModule {

}