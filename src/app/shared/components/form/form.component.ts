import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PopModel} from "../../models/pop.model";
import {UtilsService} from "../../../core/services/utils.service";
import { FormGroup} from "@angular/forms";
import {PopStore} from "../../../core/store/pop.store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input()
  Pops!: PopModel[]

  @Input()
  formAdd: FormGroup | undefined

  @Input()
  idRoot?: number

  @Output()
  ButtonAddClicked: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private store: PopStore, private util: UtilsService, private _snackBar: MatSnackBar, private spinner: NgxSpinnerService) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

   //Lo spinner non si vede , amen
  // Nel caso in cui l'id non è un numero effettuo l'aggiunta del pop, sennò aggiorno il pop relativo all'id
  onButtonAddClicked() {
  //  this.spinner.show().then()
    if (this.formAdd?.valid && isNaN(<number>this.idRoot)) {
      this.ButtonAddClicked.emit(true)
      this.openSnackBar('Pop added successfully!', 'OK')
      this.formAdd.reset()
   //   this.spinner.hide().then()
    } else if (!this.formAdd?.valid) {
      this.openSnackBar('Form not valid! Please complete the form to submit', 'OK')
   //   this.spinner.hide().then()
    } else if (this.idRoot != undefined) {
      this.ButtonAddClicked.emit(false)
      this.openSnackBar('Pop modified successfully!', 'OK')
   //   this.spinner.hide().then()
    }
  }



}
