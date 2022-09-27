import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "../../shared/components/components.module";
import {HomeComponent} from "./home/home.component";
import {ReservationComponent} from "./reservation/reservation.component";
import { CitiesComponent } from './cities/cities.component';



@NgModule({
  declarations: [
    HomeComponent,
    ReservationComponent,
    CitiesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    ReservationComponent
  ]
})
export class FeaturesModule { }
