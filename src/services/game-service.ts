import { useEffect, useState } from "react";
import apiClient from "./api-client";
import Game from "../models/Game";
import ListOfGame from "../models/Game";
import { CanceledError } from "axios";
import Genre from "../models/Genre";

function GameService(selectedGenre : Genre | null) {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<ListOfGame>("/games", { params: { genres: selectedGenre?.id }})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);        
      });
    
    return () => controller.abort();
  },[selectedGenre?.id]);

  return {games,error};
}

export default GameService;