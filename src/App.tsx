import { useState } from "react";
import GameCard from "./components/GameCard";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import Genre from "./models/Genre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-sm-2">
            <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
          </div>
          <div className="col-sm-10">
            <div className="row">
              <GameCard selectedGenre={selectedGenre} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
