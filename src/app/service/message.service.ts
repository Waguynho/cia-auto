import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class MessageService {

  @Output()
  timer: EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  public setMessage(milisseconds: number, msg: string): void {

    this.timer.emit({timer:milisseconds, msg: msg});

    
  }

 public getTimerChangeEmitter() {
    return this.timer;
  }

}
