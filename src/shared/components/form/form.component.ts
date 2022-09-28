import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {storeData} from "../../../app/core/store/storeData";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form:FormGroup

  giorniPrenotati?:number|null
  costoNotte!: number ;
  costoTotale : number = 0;

  today:Date = new Date();
  todayS!:string


  dateMin = new Date().toISOString().split('T')[0]
  dateMinCheckout =  new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split('T')[0]


  constructor(private fb:FormBuilder,private store:storeData,datePipe:DatePipe) {

    this.todayS = this.today.toISOString().split('T')[0]
    console.log(this.todayS)
    this.form = this.fb.group({
        firstName: this.fb.control('',Validators.required),
        lastName: this.fb.control('',Validators.required),
        startDate: this.fb.control('',[Validators.required]),
        endDate: this.fb.control('',[Validators.required]),
      }
    )
    this.costoNotte = this.store.getCost()
  }

  ngOnInit(): void {
  }

  calculateCost(){
    if(this.giorniPrenotati)
    this.costoTotale = this.giorniPrenotati * this.costoNotte
    else
      this.costoTotale = 0
  }

  calculateDiff(){
    if(this.form){
      this.giorniPrenotati = Math.floor((Date.parse(this.form.value.endDate) - Date.parse(this.form.value.startDate) )/ 1000 / 60 / 60 / 24)
    }else{
      this.giorniPrenotati = null
    }
  }


  onSubmit() {
    this.calculateDiff()
    this.calculateCost()
    console.log('formato data ' + this.form.value.startDate )

  }




}
