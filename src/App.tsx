import { useState } from "react";
import GameCard from "./components/GameCard";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import Genre from "./models/Genre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./models/Platform";
import { HStack } from "@chakra-ui/react";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
            <div className="mb-3">
              <HStack spacing={5}>
                <PlatformSelector
                  selectedPLatform={selectedPlatform}
                  onSelectPLatform={(platform) => setSelectedPlatform(platform)}
                />
                <SortSelector />
              </HStack>
            </div>
            <div className="row">
              <GameCard
                selectedGenre={selectedGenre}
                selectedPlatform={selectedPlatform}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
