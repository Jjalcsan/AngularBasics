import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardsComponent } from './cards/cards.component';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CardsComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
