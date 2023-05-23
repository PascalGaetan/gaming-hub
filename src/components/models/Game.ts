
export default interface Game {
  id: number;
  name: string;
  background_image : string
}


export default interface ListOfGame {
  count: number;
  results: Game[]
}