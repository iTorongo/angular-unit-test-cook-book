import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-background',
  templateUrl: './change-background.component.html',
  styleUrls: ['./change-background.component.scss']
})
export class ChangeBackgroundComponent implements OnInit {

  isDarkMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBackground(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  get message(): string {
    return `The background is ${this.isDarkMode ? 'Dark' : 'Light'}`;
  }
}
