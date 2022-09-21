import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isTable: boolean = true;



  @Output()
  public buttonTableClicked:EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public onButtonTableClicked(showTable: boolean):void{
    this.isTable = showTable;
    this.buttonTableClicked.emit(this.isTable)
  }

}
