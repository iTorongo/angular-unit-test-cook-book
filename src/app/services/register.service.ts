import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Create Account
   */
  createAccount(body): Observable<any> {
    return this.http.post(`mockapi...`, body);
  }
}
