import {Component, Input, OnInit} from '@angular/core';
import {Pop} from "../../../models/pop.model";

@Component({
  selector: 'app-pop-card',
  templateUrl: './pop-card.component.html',
  styleUrls: ['./pop-card.component.scss']
})
export class PopCardComponent implements OnInit {



  @Input()
  pop!:Pop

  constructor() { }

  ngOnInit(): void {
  }

}
