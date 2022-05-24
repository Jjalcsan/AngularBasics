import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginServicioService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8000/auth/login", user)
  }

  setToken(token: string){
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  getUserLogged() {
    const token = this.getToken();
    return token;
  }



}
