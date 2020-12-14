import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.scss']
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
