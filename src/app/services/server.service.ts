import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private http: HttpClient
  ) { }

  getUserList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  createUser(data): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', data);
  }
}
