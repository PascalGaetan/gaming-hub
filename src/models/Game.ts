import {Platform} from "./Platform";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number
}


export default interface ListOfGame {
  count: number;
  results: Game[]
}