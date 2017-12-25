import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Car } from './../model/car';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarroService {

  constructor(private http: Http, private authSvc: AuthService) { }

  CreateCar(newCar: Car): Observable<any> {

    let options = this.authSvc.GetHeaders();

    return this.http.post(environment.urlBase + '/carros', newCar, options).map(response => response.json());
  }

  GetCars(start: number): Observable<any> {

    let options = this.authSvc.GetHeaders();

    return this.http.get(environment.urlBase + `/carros?start=${start}`, options)
    .map(response =>  
      
       response
    );
  }

}
