import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateStrength'
})
export class TranslateStrengthPipe implements PipeTransform {

  transform(value:number): string {
    switch (value){
      case 0:
        return 'Na mezza sega'
        break;
      case 0:
        return 'Mi nipote de 6 mesi fa piu paura'
      case 1:
        return 'Quasi na sega'
      case 2:
        return 'Sega'
      case 3:
        return 'Numero perfetto,non come la forza di questo Pop'
      case 4:
        return 'Quasi decente'
      case 5:
        return 'Decente'
      case 6:
        return 'Allena il bicio'
      case 7:
        return 'Alzo le mani'
      case 8:
        return 'Mbruttito'
      case 9:
        return 'Casamonicas boss'
      case 10:
        return 'Dio'
      default:
        return 'Se vabbe lallero'
    }
  }

}
