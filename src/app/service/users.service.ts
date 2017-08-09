import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UsersModel } from '../model/users.model';

import 'rxjs/add/operator/map';

const API_END_POINT = 'http://localhost:4000/users/';

@Injectable()

export class UsersService {

    users: UsersModel[];

    constructor(private http: Http) { }

    getAllUsers() {
        return this.http.get(API_END_POINT).map((response: Response) => response.json());
    }

    register(userObj: UsersModel) {
        return this.http.post(API_END_POINT + 'register', userObj);
    }

}