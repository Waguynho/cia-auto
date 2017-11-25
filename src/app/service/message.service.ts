import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class MessageService {

  @Output()
  timer: EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  public setMessage(milisseconds: number, msg: string, level: string): void {

    this.timer.emit({timer:milisseconds, msg: msg, level: level});

    
  }

 public getTimerChangeEmitter() {
    return this.timer;
  }

}
