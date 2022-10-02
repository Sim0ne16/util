import {Injectable, OnInit} from "@angular/core";
import { PopModel } from "src/app/shared/models/pop.model";
import {UtilsService} from "../services/utils.service";


@Injectable({
  providedIn:'root'
})
export class PopStore {

  private Pops:PopModel[] = []


  getPops(): PopModel[] {
    return this.Pops;
  }

  setPops(value: PopModel[]) {
    this.Pops = value;
  }

  getLastId():number{
    return this.Pops[this.Pops.length-1].id + 1
  }

}
