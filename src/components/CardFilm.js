import React from "react";
import BtnFavorites from "../components/BtnFavorites";
import { dateFormat } from "../helpers";

const CardFilm = ({ prop, parentSetSelectedMovie }) => {
  const defineSelectedMovie = () => {
    parentSetSelectedMovie(prop.id);
  };

  return (
    <div className="cardFilm" onClick={defineSelectedMovie}>
      <img
        src={prop.poster_path ? `https://image.tmdb.org/t/p/w500${prop.poster_path}` : "./movie_poster.jpg"}
        alt={`Affiche du film ${prop.title}`}
        width="190"
        height="285"
      />
      <div className="card-content">
        <h3>{prop.title}</h3>
        <hr />
        <div className="card-content-desc">
          <p className="info">
            <span className="date">
              <svg width="1em" height="1em" viewBox="0 0 24 24" className="ico date">
                <path
                  d="M12 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1zm-5 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1zM7 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1zM19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zM7 18a1 1 0 1 0-1-1a1 1 0 0 0 1 1z"
                  fill="currentColor"
                ></path>
              </svg>
              {prop.release_date ? dateFormat(prop.release_date) : "Date de sortie inconnue"}
            </span>
            <span className="vote">
              <svg width="1em" height="1em" viewBox="0 0 512 512" className="ico star">
                <path
                  d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"
                  fill="currentColor"
                ></path>
              </svg>
              {prop.vote_average}/10 ({prop.vote_count} votes)
            </span>
          </p>
          <BtnFavorites id={prop.id} />
        </div>
      </div>
    </div>
  );
};

export default CardFilm;
