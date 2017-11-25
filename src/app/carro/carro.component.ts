import { MessageService } from './../service/message.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
  
})
export class CarroComponent implements OnInit {

  

  constructor( private messageSvc: MessageService) { }

  ngOnInit() {
    
  }

}
