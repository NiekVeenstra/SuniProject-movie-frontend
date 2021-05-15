import React from "react";

const MovieLaneCard = ({ backdropPath }) => {
  return (
    <div className="movieLaneCard">
      <div className="movieLaneCard__movieImage">
        <img className="movieLaneCard__img" src={backdropPath} alt="" />
      </div>
    </div>
  );
};

export default MovieLaneCard;
