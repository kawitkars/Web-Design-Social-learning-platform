import {Component, Input, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Course } from '../courses/course.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
    @Input() course: Course;
}