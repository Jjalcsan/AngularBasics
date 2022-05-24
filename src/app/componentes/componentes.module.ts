import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopbarComponent,
    CardsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TopbarComponent,
    CardsComponent,
    LoginComponent
  ]
})
export class ComponentesModule { }
