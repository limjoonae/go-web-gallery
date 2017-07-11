import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class TreeService {
    
    constructor(private http: Http) {}

    getFiles() {
        return this.http.get('./assets/data/files.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data);
    }
}