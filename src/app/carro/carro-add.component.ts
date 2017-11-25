import { Car } from './../model/car';
import { Person } from './../model/person';
import { MessageService } from './../service/message.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsaveForm } from '../model/save-form';
import { FormsModule } from '@angular/forms';

import { PersonService } from './../service/person.service';
@Component({
  selector: 'carro-add',
  templateUrl: './carro-add.component.html',
  providers: [PersonService]
})
export class CarroAddComponent implements OnInit, IsaveForm {

  isSalvouRegistro: boolean = false;
  carro: Car;
  users: Person[];

  selectedValue: any;
  constructor( private router: Router, private personSvc: PersonService, private messageSvc: MessageService) { }

  ngOnInit() {

    this.carro = new Car();

    this.personSvc.GetPersons().then(response => {

      this.users = response.json() as Person[];

      console.log(this.users);

      // this.router.navigate(['/dashboard']);
    })
      .catch(erro => {

        this.messageSvc.setMessage(5000, JSON.parse(erro._body).messagem, "danger");
        // this.router.navigate(['/']);
      });
  }

  SalvarCarro(): void {
    this.isSalvouRegistro = true;

    this.carro.dono = this.selectedValue;
    console.log(this.carro);
    debugger;
    this.messageSvc.setMessage(5000, "Salvo com sucesso!","success");
    //this.router.navigate(['/carros']);
  }

  IsSavouRegistro(): boolean {
    return this.isSalvouRegistro;
  }

}