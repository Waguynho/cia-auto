import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  login: string;
  senha: string;
  isLogged: boolean;
  user: any;

  constructor(private router: Router, private autSvc: AuthService) { }

  ngOnInit() {

    this.user = this.autSvc.GetUser();

    this.isLogged = this.autSvc.IsLogged();
  }


  Logar(): void {

    this.autSvc.PostCredentials(this.login, this.senha)
      .then(response => {

        this.user = response.json().user;

        localStorage.setItem('user', JSON.stringify(this.user));

        this.isLogged = this.autSvc.IsLogged();

        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {

        console.error(erro);

        this.router.navigate(['/']);
      });


  }

  Deslogar(): void {
    this.isLogged = false;
    this.autSvc.Logout();
    this.router.navigate(['/']);
  }
}


