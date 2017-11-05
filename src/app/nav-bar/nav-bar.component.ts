import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})
export class NavBarComponent implements OnInit {

  isUserLogged: boolean;;

  constructor() { 
    this.isUserLogged = false;
  }

  ngOnInit() {
   
    console.log(
      'AMBIENTE: ' + environment.ambiente);
  }

  OnLogonLogoff(evento: boolean): void {
    this.isUserLogged = evento;
    
  }


}
