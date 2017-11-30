import { Car } from './../../model/car';
import { MessageService } from './../../service/message.service';
import { CarroService } from './../../service/carro.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css'],
  providers: [CarroService]
})
export class CarroListComponent implements OnInit {

  constructor(private router: Router, private carSvc: CarroService, private messageSvc: MessageService) { }
  carros: Car[]
  ngOnInit() {

    this.LoadCars();
  }

  LoadCars() {
    this.carSvc.GetCars().subscribe(
      result => {
        console.log(result);
        this.carros = result as Car[] ;
        this.router.navigate(['/carros-list']);
      },
      erro => {
        console.log(erro);
        debugger;
        this.messageSvc.setMessage(5000, JSON.parse(erro._body).message, "danger");
      })
      ;
  }

}
