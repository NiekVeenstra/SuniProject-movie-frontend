import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Context } from "../../Context/Context";

const MovieCard = ({ videoInfo }) => {
  const [display, setDisplay] = useState(Context);
  return (
    <div className="movie-card">
      <h1 className="movie-card__title">{videoInfo.title}</h1>
      <p className="movie-card__description">{videoInfo.overview}</p>
      <div>
        <Link to="/watch" className="movie-card__play-movie">
          play
        </Link>
        <button className="movie-card__more-details" onClick={() => setDisplay(true)}>
          more info
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
