import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '',
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

}
