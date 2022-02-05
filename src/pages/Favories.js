import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ListFilm from "../components/ListFilm";
import SelectedFilm from "../components/SelectedFilm";

const Favories = () => {
  const [localStore] = useState(localStorage.favoris ? localStorage.favoris.split(",") : []);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    let arrMoviesID = localStorage.favoris ? localStorage.favoris.split(",") : [];
    arrMoviesID.forEach((el) => {
      axios.get(`https://api.themoviedb.org/3/movie/${el}?api_key=2a7bc3506d9e237e752a6e713962fea0&language=fr-FR`).then((res) => {
        setMovies((movies) => [...movies, res.data]);
      });
    });
  }, [localStore]);

  return (
    <div id="favoris">
      <Header />
      <main>
        <h1>Liste des favoris</h1>
        <ListFilm movies={movies} setSelectedMovie={setSelectedMovie}></ListFilm>
        <div className="descriptionFilm">{selectedMovie ? <SelectedFilm movieID={selectedMovie} /> : ""}</div>
      </main>
    </div>
  );
};

export default Favories;
