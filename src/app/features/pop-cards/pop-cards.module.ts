import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopCardsComponent } from './pop-cards.component';
import {CardModule} from "../../shared/components/card/card.module";
import {RouterModule, Routes} from "@angular/router";

const subRoutes: Routes = [
  { path: '', component:PopCardsComponent }
]


@NgModule({
  declarations: [
    PopCardsComponent
  ],
    imports: [
        CommonModule,
        CardModule,
       RouterModule.forChild(subRoutes),
    ],
   exports:[
    PopCardsComponent
   ]
})
export class PopCardsModule { }
