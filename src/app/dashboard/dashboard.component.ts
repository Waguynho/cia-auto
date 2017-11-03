import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
nameUser: string;

  constructor() { }

  ngOnInit() {

    let user = JSON.parse( localStorage.getItem('user'));
    
    this.nameUser = user.nome;

  }

}
