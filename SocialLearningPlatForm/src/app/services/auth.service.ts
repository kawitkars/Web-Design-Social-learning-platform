import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import {User} from '../../models/user';



@Injectable()
export class AuthService {

    domain = 'http://localhost:3000';
    token: string;

    constructor(private http: Http) {}

    registerUser(user){

        return this.http.post(this.domain + '/auth/register',user).map(res => res.json());

    }

    login(user){
        return this.http.post(this.domain + '/auth/login',user).map(res => res.json());
    }


    // login(user: User) {
    //     const body = JSON.stringify(user);
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => Observable.throw(error.json()));
    // }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}