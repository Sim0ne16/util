import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pop, Data} from "../../../models/pop.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PopCards: Pop[] = []

  Pops: Pop[] = Data;
  mock!: Pop;
  index_mock!: number;


  @Input()
  isTable!: boolean


  idMock!:number|null

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.Pops)
  }


   @Input() profileForm: FormGroup = new FormGroup({ });

  @Output()
  public buttonModifyClicked:EventEmitter<boolean> = new EventEmitter<boolean>()

  public onButtonModifyClicked(showTable: boolean):void{
    this.isTable = showTable;
    this.buttonModifyClicked.emit(this.isTable)
    this.idMock = null;

  }


  deletePop(Id: number): void {
    const pop = this.Pops.find((P: Pop) => P.id === Id)
    if (pop) {
      let index = this.Pops.indexOf(pop)
      this.Pops.splice(index, 1)
    } else {
      console.log('Something went wrong')
    }

    const pop2 = this.PopCards.find((P: Pop) => P.id === Id)
    if (pop2) {
      let index = this.PopCards.indexOf(pop2)
      this.PopCards.splice(index, 1)
    } else {
      console.log('Something went wrong')
    }
  }



  public onButtonModifyPop(Id: number) {
    this.isTable = false;

    var pop = this.Pops.find((P: Pop) => P.id === Id)

    if ( pop ) {
      this.idMock = Id
      this.index_mock = this.Pops.indexOf(pop)
      this.mock = pop
      this.profileForm.controls['Name'].setValue(this.mock.name)
      this.profileForm.controls['Strength'].setValue(String(this.mock.strength))
      this.profileForm.controls['Dead'].setValue(String(this.mock.dead))
      this.profileForm.controls['Age'].setValue(String(this.mock.age))
    } else {
      this.profileForm.reset()
    }
  }

  onSubmit() {
    let v = this.profileForm.value
    let Id = this.idMock
    var pop = this.Pops.find((P: Pop) => P.id === Id)
    if (pop) {
      this.mock.name = v.Name!
      this.mock.age = Number(v.Age)!
      this.mock.dead = Boolean(v.Dead)!
      this.mock.strength = Number(v.Strength)!
      this.Pops[this.index_mock] = this.mock
      this.idMock = null
      alert('Pop modificato!')
      this.profileForm.reset()
    } else {
       let referencePopId =this.Pops[this.Pops.length-1]

       let p:Pop = {
         age: Number(v.Age),
         dead: Boolean(v.Dead),
         id: referencePopId.id+1,
         name: String(v.Name),
         strength: Number(v.Strength)}

      this.Pops.push(p)
      alert('Pop aggiunto!')
      this.profileForm.reset()

    }

  }

  showDetails(pop:Pop) {
    this.PopCards.push(pop)
    console.log(this.PopCards)
  }
}
