import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from "../core/core.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class FeaturesModule { }
