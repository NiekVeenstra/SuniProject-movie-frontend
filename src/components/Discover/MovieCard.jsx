import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

const MovieCard = ({ videoInfo, fanArt2}) => {
  const { moreInfo, setMoreInfo } = useContext(Context);
  return (
    <div className="movie-card">
      {/* <h1 className="movie-card__title">{videoInfo.title}</h1> */}
      <img className="movie-card__title" src={fanArt2.url} alt="" />
      <p className="movie-card__description">{videoInfo.overview}</p>
      <div>
        <Link to="/watch" className="movie-card__play-movie">
          play
        </Link>
        <button className="movie-card__more-details" onClick={() => setMoreInfo(!moreInfo)}>
          more info
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
