import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "cards", component: CardsComponent, pathMatch: "full"},
  { path: "register", component: RegisterComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
