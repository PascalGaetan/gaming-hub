import { Text } from "@chakra-ui/react";
import GameService from "../services/game-service";
import PlatformIcon from "./PlatformIcon";
import Genre from "../models/Genre";

interface Props {
  selectedGenre: Genre | null;
}

function GameCard({selectedGenre} : Props) {
  const { games, error } = GameService(selectedGenre);
  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <div className="col-sm-4 mb-4">
          <div key={game.id} className="card">
            <img src={game.background_image} className="card-img-top" />
            <div className="card-body text-bg-secondary rounded-bottom">
              <div className="hstack pb-3 gap-2 d-flex">
                <PlatformIcon platforms={game.parent_platforms.map(p => p.platform)} />
                <div className="badge text-bg-success justify-content-between">{game.metacritic}</div>
              </div>
              
              <h5 className="card-title lead"><strong>{game.name}</strong></h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GameCard;