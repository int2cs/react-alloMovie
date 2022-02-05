import React from "react";
import CardFilm from "./CardFilm";

const Listfilm = ({ movies, setSelectedMovie }) => {
  return (
    <div className="listFilms">
      <div className="result">
        {movies.map((currentMovie) => (
          <CardFilm key={currentMovie.id} prop={currentMovie} parentSetSelectedMovie={setSelectedMovie} />
        ))}
      </div>
    </div>
  );
};

export default Listfilm;
