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
export class HomeComponent  {


  hotels : HotelModel [] = [];


  filter!:FormGroup


  constructor(private store:storeData,private fb:FormBuilder,private active:ActivatedRoute) {

    let city:Params = this.active.snapshot.params['city']

    this.hotels = this.store.getHotels()

    if(city != undefined){
     this.hotels =  this.hotels.filter(p => p.city == String(city))
    }else{
      this.hotels = this.store.getClone()
    }


    this.filter = this.fb.group({
      value:[500],
      filtern:[false],
      rating:[0],
    })
  }

  setValue(input:number) {
    if(input)
  this.filter.value['value'] = input
  }


  shuffle(a:HotelModel[]) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }


  MischiaArray(e:any) {
    if(!e.target.checked) {
      console.log('ciaone dio canenino')
    }
  }


  showDetails(hotel: HotelModel) {

  }


  orderArrayByPrice(e:any){
    if (e.target.checked){
      this.hotels.sort((a,b) => a.price - b.price)
    }else{
      this.hotels = this.store.getClone()
    }
  }


  orderArrayByRating(e:any){
    if (e.target.checked){
      this.hotels.sort((a,b) => b.rating - a.rating)
    }else{
      this.hotels = this.store.getClone()
    }
  }



}
