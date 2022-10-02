export interface StatsModel {
  "strength": number,
  "agility": number,
  "flexibility": number,
  "stamina": number,
  "intellect": number

}

export interface PopModel{
  "id": number,
  "name": string,
  "gender": string,
  "stats": StatsModel,
  "age": number
  "img": string,
}
