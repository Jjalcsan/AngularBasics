import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    TopbarComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent,
    CardsComponent
  ]
})
export class ComponentesModule { }
