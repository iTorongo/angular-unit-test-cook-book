import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [];

  userDetails: any;

  constructor(
    private service: ServerService
  ) { }

  ngOnInit(): void {
    this.service.getUserList().subscribe(res => {
      this.users = res;
    });
  }

  selectUser(id): void {
    this.service.getUser(id).subscribe(res => {
      this.userDetails = res;
    });
  }

  followSelectedUser(event): void {
    alert(`${event.name} has been followed!`)
  }
}
