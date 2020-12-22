import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
  ) {}

  /**
   * Get users
   */
  getUsers(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'John Doe'
      },
      {
        id: 2,
        name: 'Jane Doe'
      },
      {
        id: 3,
        name: 'Frank Mey'
      }
    ]);
  }
}
