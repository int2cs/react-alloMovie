import axios from "axios";
import React, { useEffect, useState } from "react";
import ListFilm from "../components/ListFilm";
import Header from "../components/Header";
import MagnifingGlass from "../components/MagnifingGlass";
import SelectedFilm from "../components/SelectedFilm";

const Home = () => {
  const [localStore, setLocalStore] = useState(localStorage.favoris ? localStorage.favoris.split(",") : []);
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    axios
      .get(
        movieSearch
          ? `https://api.themoviedb.org/3/search/movie?api_key=2a7bc3506d9e237e752a6e713962fea0&language=fr-EU&page=1&include_adult=true&query=${movieSearch}`
          : "https://api.themoviedb.org/3/movie/popular?api_key=2a7bc3506d9e237e752a6e713962fea0&language=Fr-EU&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [movieSearch]);

  const search = (e) => {
    e.preventDefault();
    setMovieSearch(e.target[0].value);
  };

  return (
    <div id="home">
      <Header />

      <main>
        <div className="searchArea">
          <form onSubmit={search}>
            <input type="search" name="search" id="searchinp" placeholder="Rechercher..." />
            <button type="submit">
              Go <MagnifingGlass />
            </button>
          </form>
        </div>

        <ListFilm movies={movies} setSelectedMovie={setSelectedMovie} localStore={localStore} setLocalStore={setLocalStore}></ListFilm>

        <div className="descriptionFilm">{selectedMovie ? <SelectedFilm movieID={selectedMovie} /> : ""}</div>
      </main>
    </div>
  );
};

export default Home;
