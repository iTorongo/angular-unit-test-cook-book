import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: any;

  @Output() userFollowed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  follow(): void {
    this.userFollowed.emit(this.user);
  }

}
