import { Image, Text } from "@chakra-ui/react";
import GenreService from "../services/genre-service";
import Genre from "../models/Genre";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

function GenreList({onSelectedGenre} : Props) {
  const { genres, error } = GenreService();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul className="list-group list-group-flush">
        {genres.map((genre) => (
          <li key={genre.id} className="hstack list-group-item list-group-item-light">
            <Image borderRadius='full' boxSize="35px" src={genre.image_background} />
            <button onClick={() => onSelectedGenre(genre)} className="btn btn-link">{genre.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;