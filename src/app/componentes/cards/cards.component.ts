import { Component, OnInit } from '@angular/core';
import { MinionsService } from 'src/app/minions/minions.service';
import { LoginServicioService } from '../login/login-servicio.service';
import { Router } from '@angular/router';
import { Minions } from 'src/app/minions/minions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  minions: Minions[] = [];

  constructor(private minion: MinionsService, private loginService: LoginServicioService, public router: Router) { }

  ngOnInit(): void {
    this.cargarMinions();
  }

  
  cargarMinions() {
      this.minion.cargarMinions()
      .subscribe(resp => {this.minions = resp.Minion;}
      ,error => {console.log(error);})
    }
  
  


}
