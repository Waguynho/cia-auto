import { MessageService } from './../../service/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  subscription: any;
  show: boolean = false;
  message: string;
  level: string;
  constructor(private messageSvc: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageSvc.getTimerChangeEmitter()
      .subscribe(item => this.setTimer(item));
  }




  setTimer(obj): void {
    
    console.log('millisecondes: ', obj.timer);
    this.show = true;
    this.message = obj.msg;
    this.level = obj.level;
    
    setTimeout(() => {
      this.show = false;
      this.message = '';
    }, obj.timer);

  }


}
