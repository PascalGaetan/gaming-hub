import { useEffect, useState } from 'react'
import apiClient from './api-client';
import Game from '../models/Game';
import ListOfGame from '../models/Game';

function GameService() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    apiClient.get<ListOfGame>('/games')
    .then((res) => setGames(res.data.results))
  },[])
  return (
    <ul>
      {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default GameService;