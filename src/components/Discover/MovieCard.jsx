import React from "react";

const MovieCard = ({ videoInfo }) => {
  return (
    <div className="movie-card">
      <h1>{videoInfo.title}</h1>
      <p>{videoInfo.title}</p>
    </div>
  );
};

export default MovieCard;
