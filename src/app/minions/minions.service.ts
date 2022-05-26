import { Injectable } from '@angular/core';
import { Minions, Minion } from './minions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginServicioService } from '../componentes/login/login-servicio.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinionsService {

  constructor(private http : HttpClient, private loginService: LoginServicioService) { }

  cargarMinions(): Observable<Minions> {

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get<Minions>(`http://localhost:8000/minions`, { headers });

  }

}

