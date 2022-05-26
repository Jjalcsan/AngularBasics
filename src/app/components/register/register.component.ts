import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private register: RegisterService, public router: Router) { }

  ngOnInit(): void {
  }

  registro(){
    const user = {email: this.email, password: this.password};
    this.register.register(user).subscribe( data => {
      this.register.setToken(data.access_token);
      this.router.navigateByUrl("/cards")
    })
  }

}
