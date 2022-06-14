import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//where to store this const
const AUTH_API = 'http://erplive.rmartstore.in';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    debugger;
    return this.http.post(AUTH_API + '/', {
      username,
      password
    }, httpOptions);
  }

 
}
