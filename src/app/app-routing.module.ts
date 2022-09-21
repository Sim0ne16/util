import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutes} from "./models/constants";
import {HomeComponent} from "./features/pop/home/home.component";

const routes: Routes = [
  {path: '',redirectTo:AppRoutes.Home,pathMatch: 'full'},
  {path: AppRoutes.Home,component:HomeComponent},
  {path: '**',redirectTo:AppRoutes.Home,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
