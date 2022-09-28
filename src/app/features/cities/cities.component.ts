import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {storeData} from "../../core/store/storeData";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  constructor(private route:Router,private store:storeData) { }

  ngOnInit(): void {

  }

  goToRoma() {
    this.store.setCity('Roma')
    this.route.navigateByUrl('home/Roma')
  }

  goToMilano() {
    this.store.setCity('Milano')
    this.route.navigateByUrl('home/Milano')
  }

  goToFirenze() {
    this.store.setCity('Firenze')
    this.route.navigateByUrl('home/Firenze')
  }

  goToNapoli() {
    this.store.setCity('Napoli')
    this.route.navigateByUrl('home/Napoli')
  }


}
