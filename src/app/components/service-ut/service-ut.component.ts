import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-service-usage',
  template: '',
})
export class ServiceUtComponent implements OnInit {

  users = [];

  constructor(
    private service: DataService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.service.getUsers()
        .subscribe(res => {
          this.users = res;
        });
  }

}
