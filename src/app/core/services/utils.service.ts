import {Injectable, OnInit} from '@angular/core';
import {PopModel} from 'src/app/shared/models/pop.model';
import {lastValueFrom, Observable} from "rxjs";
import {environment} from "../../shared/models/constants";
import {HttpClient} from "@angular/common/http";
import {PopStore} from "../store/pop.store";


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private store: PopStore, private http: HttpClient) {
  }


  modifyPop(Pop: PopModel){
    let id = Pop.id
    this.http.put(environment.server + `/pop/${id}`,Pop).subscribe(
      {
        next:() => this.getAll().then(),
        error:() =>  console.log('error'),
        complete:()  => console.log('Pop modified successfully')
  })
}

  postPop(Pop: PopModel) {
    //Se non mi sottoscrivo e nel next faccio il getAll non aggiunge
    this.http.post(environment.server + '/pop', Pop).subscribe(() => {
      this.getAll().then()
    })
    console.log('Pop added successfully')
  }

  async deletePop(id: number): Promise<any> {
    // Faccio il delete e riaggiorno i dati
    let pop: PopModel | undefined = this.store.getPops().find((p: PopModel) => p.id == id)
    if (pop) {
      //funziona con o senza return (?)
      return await lastValueFrom(this.http.delete(environment.server + '/pop/' + id)).then(() => this.getAll())
    }
  }


  async getAll() {
   return await lastValueFrom(this.http.get<PopModel[]>(environment.server + '/pop')).then(pops => {
      this.store.setPops(pops)
    })
  }


}
