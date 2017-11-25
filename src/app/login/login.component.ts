import { MessageService } from './../service/message.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output('update')
  isLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
  user: any;

  constructor(private router: Router, private autSvc: AuthService, private messageSvc: MessageService) {
  
  }

  ngOnInit() {
    this.isLogged.emit(this.autSvc.IsLogged());
    this.user = this.autSvc.GetUser();
  }


  Logar(): void {

    this.autSvc.PostCredentials(this.login, this.senha)
      .then(response => {

        this.user = response.json().user;

        localStorage.setItem('user', JSON.stringify(this.user));

        this.isLogged.emit(this.autSvc.IsLogged());

        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {
        
        this.messageSvc.setMessage(5000, JSON.parse( erro._body).messagem, "danger");
        this.router.navigate(['/']);
      });


  }

  Deslogar(): void {
    this.autSvc.Logout();
    this.isLogged.emit(this.autSvc.IsLogged());
    this.user = null;
    this.router.navigate(['/']);
  }
}


