import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../assets/model/car';

import 'rxjs/add/operator/toPromise';
    
@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCarsLarge() {
        return this.http.get('./app/content/assets/data/cars-large.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}