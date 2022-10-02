import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutes} from "./shared/models/constants";

const routes: Routes = [
 //Controllo in sequenza
  {path:AppRoutes.Home,loadChildren:() => import('./features/home/home.module').then(m => m.HomeModule)},
  {path:AppRoutes.Card,loadChildren:() => import('./features/pop-cards/pop-cards.module').then(m => m.PopCardsModule)},
  {path:AppRoutes.Form,loadChildren:() => import('./features/pop-form/pop-form.module').then(m => m.PopFormModule)},
  {path:'',redirectTo:AppRoutes.Home,pathMatch:'full'},
  {path:'**',redirectTo:AppRoutes.Home,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
