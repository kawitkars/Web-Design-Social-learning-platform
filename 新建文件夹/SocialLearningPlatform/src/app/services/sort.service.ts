import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SortService {

  domain = "http://localhost:3000";
  links;

  constructor(
    private http:Http
  ) { }

  getAllLinks(){
    return this.http.get(this.domain + '/api/links').map(res => res.json());
  }

}
