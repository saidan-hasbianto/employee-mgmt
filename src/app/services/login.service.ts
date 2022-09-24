import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { environment } from 'src/environments/environment';

const API_LOGIN = environment.apiUrl + "/api/auth/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    console.log(JSON.stringify({ username, password }));
    return this.http.post<Employee>(API_LOGIN, JSON.stringify({ username, password }));
  }
}
