import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../Context/Context";

const MovieInfoVideoPreviewPlayPanel = ({ fanArt2, preview }) => {
  const { setPlayMovie } = useContext(Context);
  return (
    <div className="movieInfoVideoPreview__controlePanel">
      <img className="movieInfoVideoPreview__title" src={fanArt2} alt="" />
      <div className="movieInfoVideoPreview__playButton">
        <Link to="/watch-movie" >
        <button
          className="movie-card__play-movie"
          style={{ cursor: "pointer" }}
          onClick={() => {
              setPlayMovie(preview);
          }}
        >
          play
        </button>
        </Link>
        <i className="far fa-thumbs-up"></i>
        <i className="far fa-thumbs-down"></i>
      </div>
    </div>
  );
};

export default MovieInfoVideoPreviewPlayPanel;
