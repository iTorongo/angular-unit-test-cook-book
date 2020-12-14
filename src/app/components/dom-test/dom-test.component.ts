import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-test',
  templateUrl: './dom-test.component.html',
  styleUrls: ['./dom-test.component.scss']
})
export class DomTestComponent implements OnInit {

  visibility = false;

  isSuccess = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAlert(): void {
    this.visibility = !this.visibility;
  }

  changeAlertType(): void {
    this.isSuccess = !this.isSuccess;
  }
}
