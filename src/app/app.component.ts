import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pop'
  isTable: boolean = true;

  form: FormGroup = new FormGroup( { });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  this.form = this.fb.group({
    Name: ['', [Validators.required, Validators.min(2)]],
    Strength: ['', [Validators.required, Validators.min(0)]],
    Age: ['', [Validators.required, Validators.min(0)]],
    Dead: ['', [Validators.required, ]],
  });
}

  showTable(bol: boolean){
    this.isTable = bol;
    if(!bol) {
      this.form.reset();
    }
  }

  hideTable(bol: boolean){
    this.isTable = bol;
  }

}
