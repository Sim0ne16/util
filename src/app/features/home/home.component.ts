import {Component, OnInit} from '@angular/core';
import {HotelModel} from "../../../shared/models/hotel.model";
import {storeData} from "../../core/store/storeData";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  hotels : HotelModel [] = [];


  filter!:FormGroup


  constructor(private store:storeData,private fb:FormBuilder,private active:ActivatedRoute) {

    let city:Params = this.active.snapshot.params['city']

    this.hotels = this.store.getHotels()

    if(city != undefined){
      for(let c of this.hotels){
        if(c.city != String(city)){
          this.hotels.splice(this.hotels.indexOf(c),1)
        }
      }
    }

    this.filter = this.fb.group({
      value:[500],
      filtern:[false],
      rating:[0]
    })
  }

  ngOnInit(): void {
    this.hotels = this.store.getHotels()

  }




  setValue(input:number) {
    if(input)
  this.filter.value['value'] = input
  }




  showDetails(hotel: HotelModel) {

  }







    }
