import {Component, Input,TemplateRef} from '@angular/core';
import { Router } from "@angular/router";

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AuthService} from '../services/auth.service';

import { Course } from '../../models/course';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    modalRef: BsModalRef;

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    @Input() course: Course;

    constructor(private authService: AuthService, private router: Router,private modalService: BsModalService) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['homepage']);
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}