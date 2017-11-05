import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsaveForm } from '../model/save-form';

@Component({
  selector: 'carro-add',
  templateUrl: './carro-add.component.html'     

})
export class CarroAddComponent implements OnInit, IsaveForm {

  private isSalvouRegistro: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  SalvarCarro(): void{
    this.isSalvouRegistro = true;
    this.router.navigate(['/carros']);
  }

  IsSavouRegistro(): boolean {
    return this.isSalvouRegistro;
  }

}