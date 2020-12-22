import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [];

  constructor(
    private service: ServerService
  ) { }

  ngOnInit(): void {
    this.service.getUserList().subscribe(res => {
      this.users = res;
    });
  }

}
