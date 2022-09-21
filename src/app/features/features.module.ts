import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pop/home/home.component';
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PopModule} from "../shared/pop/pop.module";



@NgModule({
  declarations: [
    HomeComponent,
  ],
    imports: [
        CommonModule,
        CoreModule,
        ReactiveFormsModule,
        PopModule
    ],

  exports: [
    HomeComponent
  ]
})
export class FeaturesModule { }
