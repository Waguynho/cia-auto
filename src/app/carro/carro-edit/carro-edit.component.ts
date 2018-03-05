import { Car } from '../../model/car';
import { Person } from '../../model/person';
import { MessageService } from '../../service/message.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IsaveForm } from '../../model/save-form';
import { FormsModule } from '@angular/forms';
import { CarroService } from '../../service/carro.service';

@Component({
  selector: 'carro-edit',
  templateUrl: './carro-edit.component.html',
  providers: [CarroService]
})
export class CarroEditComponent implements OnInit {
  
  carEdit: Car;
  titleEdit: string;
 
  constructor(private router: Router, private route: ActivatedRoute,  private carSvc: CarroService, private messageSvc: MessageService) { }

  ngOnInit() {
    this.titleEdit = "Editar Carro";
    this.LoadCar();
   
  }

  LoadCar(): void {

    this.route.params.subscribe(params => {
        
        let id =  params['id']; 

        this.carSvc.GetCarById(id).subscribe(
            result => {
              
              this.carEdit = JSON.parse(result._body);
      
              console.log('editando carro: ' + this.carEdit.nome);             
            },
            erro => {
              console.log(erro);
              debugger;
              this.messageSvc.setMessage(5000, JSON.parse(erro._body).message, "danger");
            });  
     });

  }

}