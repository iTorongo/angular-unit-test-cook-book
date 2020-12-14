import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  template: '',
})
export class EventEmitterComponent implements OnInit {

  counter = 0;
  counterUpdated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.counter++;
    this.counterUpdated.emit(this.counter);
  }


}
