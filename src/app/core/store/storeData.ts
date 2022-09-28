import {Injectable} from "@angular/core";
import {HotelModel} from "../../../shared/models/hotel.model";

const HOTELS: HotelModel[] = [

  {
    id: 1,
    name: 'terme di destra',
    price: 200,
    address: 'via le mani dal naso',
    pathphoto: 'https://picsum.photos/200/300',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    rating: 5,
    city: 'Roma'

  },

  {
    id: 2,
    name: 'agriturismo della luce',
    price: 300,
    address: 'piazza dei caduti a testa in giu',
    pathphoto: 'https://picsum.photos/200/300',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    rating: 8,
    city: 'Roma'
  },
  {
    id: 3,
    name: 'resort del buio',
    price: 100,
    address: 'viale dei romanisti',
    pathphoto: 'https://picsum.photos/200/300',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    rating: 7,
    city: 'Napoli',
  }, {
    id: 4,
    name: 'terme di sinistra',
    price: 450,
    address: 'via le mani dal culo',
    pathphoto: 'https://picsum.photos/200/300',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    rating: 5,
    city: 'Milano'

  },


]

const costPerNight : number = 0;

const city:string = "";

@Injectable({
  providedIn : 'root'
})

export class storeData{
  private _hotels:HotelModel[] = HOTELS;
  private _cost = costPerNight
  private _city = city
  private _cloneHotel:HotelModel[] = Object.assign([],HOTELS)





  getClone(){
    return this._cloneHotel
  }

  setCity(value: string) {
    this._city = value;
  }

  getHotels(): HotelModel[] {
    return this._hotels;
  }


  getCost(): number {
    return this._cost;
  }

  setCost(value: number) {
    this._cost = value;
  }
}


