import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SortService {

  domain = "http://localhost:3000";

  constructor(
    private http:Http
  ) { }

  getAlllink(){

    return this.http.get(this.domain + '/api/links').map(res => res.json());

  }

}
