import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '', weight: 1.0079, symbol: 'H'},
  {position: 2, name: '', weight: 4.0026, symbol: 'He'},
  {position: 3, name: '', weight: 6.941, symbol: 'Li'},
  {position: 4, name: '', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: '', weight: 10.811, symbol: 'B'},
  {position: 6, name: '', weight: 12.0107, symbol: 'C'},
  {position: 7, name: '', weight: 14.0067, symbol: 'N'},
  {position: 8, name: '', weight: 15.9994, symbol: 'O'},
  {position: 9, name: '', weight: 18.9984, symbol: 'F'},
  {position: 10, name: '', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: '', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: '', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: '', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: '', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: '', weight: 30.9738, symbol: 'P'},
  {position: 16, name: '', weight: 32.065, symbol: 'S'},
  {position: 17, name: '', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: '', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: '', weight: 39.0983, symbol: 'K'},
  {position: 20, name: '', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements AfterViewInit {

  displayedColumns: string[] = ['position','modify', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  isDisabled: boolean = true;
  position: number = 0;



  insertName(inputName:any){
    ELEMENT_DATA[this.position-1]['name'] = inputName.value;
    inputName.value=''
    this.isDisabled = true;
    inputName.placeholder = 'DISABLED';




  }

  modify(holder:any,pos:number){
      this.isDisabled = false;
      holder.placeholder = ' ';
      this.position = pos;
  }



  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }



}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



