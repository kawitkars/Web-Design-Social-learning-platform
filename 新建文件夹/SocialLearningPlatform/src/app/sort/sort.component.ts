import { Component, OnInit } from '@angular/core';
import {SortService} from '../services/sort.service';
declare var $:any;
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(
    private sortService: SortService
  ) {}

  test(){

    this.sortService.getAllLinks().subscribe(data =>{
      console.log(data);
    });

  }

  ngOnInit() {

  }

}
