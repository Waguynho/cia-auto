import { Car } from '../../model/car';
import { Person } from '../../model/person';
import { MessageService } from '../../service/message.service';
import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsaveForm } from '../../model/save-form';
import { FormsModule } from '@angular/forms';
import { CarroService } from '../../service/carro.service';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'carro-form',
  templateUrl: './carro-form.component.html',
  providers: [PersonService, CarroService]
})
export class CarroFormComponent implements OnInit,  IsaveForm {

  @Input()  TitleFormCar: string;  
  isSalvouRegistro: boolean = false;
  @Input()  carro: Car;
  users: Person[];

  selectedPerson: Person;
  constructor(private router: Router, private personSvc: PersonService, private carSvc: CarroService, private messageSvc: MessageService) { 
 
  }

  ngOnInit(){
              
    this.loadPersonsOptionSet();

    if(this.carro == null){

        this.carro = new Car();
    }else{    
      this.selectedPerson = this.carro.dono;
      console.log('CARRO: ');
      console.log(this.carro);
    }   
  }

  loadPersonsOptionSet(): void{

    this.personSvc.GetPersons().then(response => {

        this.users = response.json() as Person[];
  
        console.log(this.users); 
         
      })
        .catch(erro => {
  
          this.messageSvc.setMessage(5000, JSON.parse(erro._body).messagem, "danger");
           this.router.navigate(['/']);
        });
  }

  SalvarCarro(): void {
       
    this.isSalvouRegistro = true;

    this.carro.dono = this.selectedPerson;

    console.log(this.carro);

    alert('salvou teste! ');

    return;

    // this.carSvc.CreateCar(this.carro).subscribe(
    //   result => {
    //     console.log(result);        
    //     this.messageSvc.setMessage(5000, "Salvo com sucesso!", "success");
    //     this.router.navigate(['/carros-list']);
    //   },
    //   erro => {
    //     console.log(erro);
    //     debugger;
    //     this.messageSvc.setMessage(5000, JSON.parse(erro._body).message, "danger");
    //   })
    //   ;

    //this.router.navigate(['/carros']);
  }

  IsSavouRegistro(): boolean {
    return this.isSalvouRegistro;
  }


}