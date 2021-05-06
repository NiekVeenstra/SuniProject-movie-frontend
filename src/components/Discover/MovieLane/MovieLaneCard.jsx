import React from "react";

const MovieLaneCard = ({ backdropPath, posterPath, name, nr }) => {
  return (
    <div className="movieLaneCard">
      <div className="svgnumber">
        <div className="div">
          <svg className="place" viewBox="0 0 450 50">
            <text y="50">{nr}</text>
          </svg>
        </div>
      </div>
      {/* <div className="number">{nr}</div> */}
      <div className="movieImage">
        <img className="poster" src={posterPath} alt="" />
      </div>
    </div>
  );
};

export default MovieLaneCard;
