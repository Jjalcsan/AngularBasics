import { Injectable } from '@angular/core';
import { Minions } from './minions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginServicioService } from '../componentes/login/login-servicio.service';

@Injectable({
  providedIn: 'root'
})
export class MinionsService {

  constructor(private http : HttpClient, private loginService: LoginServicioService) { }

  cargarMinions() {

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.loginService.getToken()}`);

    return this.http.get<Minions>(`https://localhost:8000/products`, { headers });

}

}

