import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
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

  IsLogged():boolean {

    if(localStorage.getItem('user')){
      return true;
    }

    return false;

  }

  Logout(): void{

    localStorage.removeItem('user');
  }

  GetUser(){
    let user = localStorage.getItem('user');
    return JSON.parse( user);
  }



}
