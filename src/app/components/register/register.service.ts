import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user:any): Observable<any> {
    return this.http.post("http://localhost:8000/auth/register", user)
  }

  setToken(token: string){
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token")
  }
}
