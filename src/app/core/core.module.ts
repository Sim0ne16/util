import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./layout/header/header.component";
import { TranslateStrengthPipe } from './pipes/translate-strength.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    TranslateStrengthPipe
  ],
  exports: [
    HeaderComponent,
    TranslateStrengthPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
