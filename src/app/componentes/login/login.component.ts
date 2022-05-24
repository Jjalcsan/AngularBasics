import { Component, OnInit } from '@angular/core';
import { LoginServicioService } from './login-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor( public loginService : LoginServicioService, public router: Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log("hola")
    const user = {email: this.email, password: this.password};
    this.loginService.login(user).subscribe( data => {
      console.log(data);
      this.loginService.setToken(data.token);
      this.router.navigateByUrl("/cards")
    })
  }

}
