import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PopModel} from '../../models/pop.model';
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  Pops!: PopModel[]

  @Output()
  buttonDeleteClicked: EventEmitter<number> = new EventEmitter<number>();


  @Output()
  buttonModifyClicked: EventEmitter<number> = new EventEmitter<number>();


  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onButtonDeleteClicked(id: number) {
    this.buttonDeleteClicked.emit(id)
    this.openSnackBar('Pop eliminated!', 'OK')
  }

  onButtonEditClicked(id: number) {
    this.buttonModifyClicked.emit(id)
    this.openSnackBar('Now you can modify the Pop!', 'OK')
  }



}
