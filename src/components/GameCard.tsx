import { Text } from "@chakra-ui/react";
import GameService from "../services/game-service";

function GameCard() {
  const { games, error } = GameService();
  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <div className="col-sm-4">
          <div key={game.id} className="card">
            <img src={game.background_image} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{game.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GameCard;
