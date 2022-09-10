import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    FooterComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
  FooterComponent,
  SideBarComponent,
  ]

})
export class CoreModule { }
