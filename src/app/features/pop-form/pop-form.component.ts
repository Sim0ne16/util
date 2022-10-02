import {Component, OnInit} from '@angular/core';
import {PopModel, StatsModel} from "../../shared/models/pop.model";
import {UtilsService} from "../../core/services/utils.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PopStore} from "../../core/store/pop.store";
import {ActivatedRoute} from "@angular/router";




@Component({
  selector: 'app-pop-form',
  templateUrl: './pop-form.component.html',
  styleUrls: ['./pop-form.component.css']
})
export class PopFormComponent implements OnInit {

  Pops!: PopModel[]
  form: FormGroup | undefined

  idRoot: number | undefined
  Pop: PopModel | undefined

  constructor(private store: PopStore, private util: UtilsService, private fb: FormBuilder, root: ActivatedRoute) {
    this.idRoot = Number(root.snapshot.params['id'])

    if(!isNaN(this.idRoot))
      this.Pop = this.store.getPops().find(p => p.id === this.idRoot)
  }


  ngOnInit(): void {

    this.util.getAll().then(() => this.Pops = this.store.getPops())

    this.form = this.fb.group({
        name: this.fb.control('', Validators.required),
        gender: this.fb.control('M', Validators.required),
        age: this.fb.control('', Validators.required),
        stats: this.fb.group({
          strength: this.fb.control('', Validators.required),
          agility: this.fb.control('', Validators.required),
          flexibility: this.fb.control('', Validators.required),
          stamina: this.fb.control('', Validators.required),
          intellect: this.fb.control('', Validators.required),
        })
      }
    )
    if (this.Pop) {
        let value = this.form?.controls
        if (value) {
          value['name'].setValue(this.Pop.name)
          value['gender'].setValue(this.Pop.gender)
          value['age'].setValue(this.Pop.age)
          value['stats'].get('strength')?.setValue(this.Pop.stats.strength)
          value['stats'].get('agility')?.setValue(this.Pop.stats.agility)
          value['stats'].get('flexibility')?.setValue(this.Pop.stats.flexibility)
          value['stats'].get('stamina')?.setValue(this.Pop.stats.stamina)
          value['stats'].get('intellect')?.setValue(this.Pop.stats.intellect)
        }
      }
  }


  addPop(isAdd: boolean): void {
    if (this.form) {
      let v = this.form.value
      if (isAdd) {
        let stat: StatsModel = {
          strength: v.stats['strength'],
          agility: v.stats['agility'],
          flexibility: v.stats['flexibility'],
          stamina: v.stats['stamina'],
          intellect: v.stats['intellect']
        }

        let pop: PopModel = {
          id: this.store.getLastId(),
          name: v['name'],
          age: v['age'],
          gender: v['gender'],
          stats: stat,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmj8XV_w5dz1k1ug0u3fJw5OfZt7_cqRD7PqYYse8DHrPa7cgiplSAPMk2_ZqW5MeotJk&usqp=CAU'
        }

        this.util.postPop(pop)

      } else {
        if (this.Pop && this.idRoot) {
          let index = this.Pops.findIndex(p => p.id === this.idRoot)

          let stat: StatsModel = {
            strength: v.stats['strength'],
            agility: v.stats['agility'],
            flexibility: v.stats['flexibility'],
            stamina: v.stats['stamina'],
            intellect: v.stats['intellect']
          }
          let pop: PopModel = {
            id: this.idRoot,
            name: v['name'],
            age: v['age'],
            gender: v['gender'],
            stats: stat,
            img: String(this.Pops[index].img)
          }

          this.util.modifyPop(pop)
        }
      }
    }
  }


}
