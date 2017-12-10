import { Component, OnInit ,TemplateRef} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {SortService} from '../services/sort.service';
import{SortComponent} from '../sort/sort.component';
import { Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-search',

  templateUrl:'./search.component.html',
  
  styleUrls: ['./search.component.css'],

  template: '<form [formGroup]="myForm" (ngSubmit)="onSubmit()" class="navbar-form navbar-left" role="search"><div class="form-group"><input type="text" id="search" class="form-control" formControlName="search"></div> <button routerLinkActive="active" type="submit" class="btn btn-default">Search</button></form><app-sort [course] = "course" [SearchResult]= "SearchResult"> </app-sort>'
})
export class SearchComponent implements OnInit {

  myForm: FormGroup;

  Links;

  SearchResult:any[];

  course:string;

  constructor(private sortService: SortService) { }


  onSubmit() {

    this.SearchResult = new Array();

    this.course = this.myForm.value.search;

    this.sortService.getAlllink().subscribe(data =>{

      console.log(data);
     

      this.Links = data;


      for (var i = 0; i<data.length;i++){


        if(data[i].courseName == this.course){
           
           this.SearchResult.push(data[i]);
        }

      }

      this.Links = this.SearchResult;

      if(this.Links.length ==0){
        alert("No such course found");
      }else{
      }
      

    });
       
    this.myForm.reset();
}

  ngOnInit() {
    this.myForm = new FormGroup({
      search: new FormControl(null,Validators.required)
    });
  }

}
