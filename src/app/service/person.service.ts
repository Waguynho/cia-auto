import { Person } from './../model/person';
import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }
  
    GetPersons(): Promise<any> {
      return this.http.get(environment.urlBase + '/pessoas').toPromise();
    }

}
