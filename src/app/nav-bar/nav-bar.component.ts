import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})
export class NavBarComponent implements OnInit {

  isUserLogged: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(
      'AMBIENTE: ' + environment.ambiente);
  }

  OnLogonLogoff(evento: boolean): void {
   debugger;
    this.isUserLogged = evento;

  }


}
