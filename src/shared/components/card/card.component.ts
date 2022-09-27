import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HotelModel} from "../../models/hotel.model";
import {storeData} from "../../../app/core/store/storeData";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() datasource: HotelModel[] | undefined;

  @Output() cardEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Input() costFilter!:number

  @Input() rating!:number

  @Input() filtern:boolean = false

  constructor(private store:storeData) { }

  ngOnInit(): void {
  }

  setPrice(price : number) {
    this.store.setCost(price)
  }
}
