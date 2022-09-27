import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {RouterLinkWithHref} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";



@NgModule({
  declarations: [
    CardComponent,
    FormComponent,
  ],
  exports: [
    CardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
