import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import { ReservationComponent } from './features/reservation/reservation.component';
import {CitiesComponent} from "./features/cities/cities.component";

const routes: Routes = [
  { path: 'reservation', component: ReservationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'home/:city', component:HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'cities' },
  {path: '**',  pathMatch: 'full', redirectTo : 'cities'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
