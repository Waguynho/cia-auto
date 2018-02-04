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
  carros: Car[];
  inicio: number;
  qtdRegistros: number;
  qtdPorPagina: number;
  paginaAtual: number;
  totalPaginas: Array<number>;


  ngOnInit() {
    this.qtdPorPagina = 8;
    this.inicio = this.inicio || 0;
    this.paginaAtual = 1;
    this.LoadCars();
  }

  LoadCars() {
    this.carSvc.GetCars(this.inicio).subscribe(
      result => {

        this.qtdRegistros = parseInt(result.headers.get('Quantity'));

        this.totalPaginas = new Array(Math.ceil(this.qtdRegistros / this.qtdPorPagina));

        this.carros = JSON.parse(result._body);

        this.router.navigate(['/carros-list']);
      },
      erro => {
        console.log(erro);
        debugger;
        this.messageSvc.setMessage(5000, JSON.parse(erro._body).message, "danger");
      });
  }

  toPage(page) {


    if (this.paginaAtual == page) {
      return;
    }


    if (page > this.totalPaginas.length || page <= 0) {
      return;
    }
    this.paginaAtual = page;

    console.log('pagina: ' + this.paginaAtual);

    this.inicio = (this.qtdPorPagina * page) - this.qtdPorPagina;

    this.LoadCars();
  }

}
