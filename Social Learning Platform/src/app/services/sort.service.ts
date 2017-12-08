import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, RequestOptionsArgs} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SortService {

  domian = "http://localhost:3000";


  constructor(
    private http: Http,
  ) { }

  getAllcontent(){
    return this.http.get(this.domian + '/api/links',).map(res => res.json());
  }

}
