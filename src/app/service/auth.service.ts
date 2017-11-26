import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  PostCredentials(login, password): Promise<any> {
    return this.http.post(environment.urlBase + '/authenticate', {
      "login": login,
      "senha": password
    }).toPromise();
  }

  IsLogged(): boolean {

    if (localStorage.getItem('user')) {
      return true;
    }

    return false;

  }

  Logout(): void {

    localStorage.clear();
  }

  GetUser() {
    let user = localStorage.getItem('user');
    return JSON.parse(user);
  }

  GetHeaders(): RequestOptions {

    let headers = new Headers();

    let token = localStorage.getItem('token');

    headers.append('token', token);

    let options = new RequestOptions({ headers: headers });

    return options;
  }



}
