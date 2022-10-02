import {Component, EventEmitter, OnInit} from '@angular/core';
import {PopModel} from "../../shared/models/pop.model";
import {UtilsService} from "../../core/services/utils.service";
import {PopStore} from "../../core/store/pop.store";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../shared/models/constants";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";


@Component({
  selector: 'app-pop-cards',
  templateUrl: './pop-cards.component.html',
  styleUrls: ['./pop-cards.component.css']
})
export class PopCardsComponent implements OnInit {

  Pops!: PopModel[]


  constructor(private http: HttpClient, private store: PopStore, private util: UtilsService, private spinner: NgxSpinnerService,private router: Router) {

  }

  ngOnInit(): void {
    this.util.getAll().then(() => this.Pops = this.store.getPops())
  }

  async deletePop(id: number) {
    await this.spinner.show()
    await this.util.deletePop(id).then(() => this.Pops = this.store.getPops()).finally(() => this.spinner.hide())
  }

  modifyPop(id:number){
    this.router.navigateByUrl(`pop-form/${id}`).then()
  }


}
