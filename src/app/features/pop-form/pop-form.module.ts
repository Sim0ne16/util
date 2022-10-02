import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopFormComponent} from './pop-form.component';
import {RouterModule, Routes} from "@angular/router";
import {FormModule} from "../../shared/components/form/form.module";
import {AppModule} from "../../app.module";

const subRoutes: Routes = [
  {path: '', component: PopFormComponent},
  {path: ':id', component: PopFormComponent}
]

@NgModule({
  declarations: [
    PopFormComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    RouterModule.forChild(subRoutes),
  ],
  exports: [
    PopFormComponent
  ]
})
export class PopFormModule {
}
