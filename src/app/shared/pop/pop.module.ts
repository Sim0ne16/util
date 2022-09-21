import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopCardComponent} from "./pop-card/pop-card.component";



@NgModule({
  declarations: [
    PopCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PopCardComponent,
  ]

})
export class PopModule { }
