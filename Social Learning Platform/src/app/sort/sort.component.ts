import { Component, OnInit } from '@angular/core';
import { SortService} from '../services/sort.service';
import {Link} from 'app/models/link';
import {DomSanitizer} from '@angular/platform-browser';  

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  srcUrl:any;

  Links;

  constructor(
    private sortService: SortService,
    public sanitizer: DomSanitizer
    ) {}

  test(){

     this.sortService.getAllcontent().subscribe(data =>{

      this.Links = data;

     });
  }

  transform(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

}
