import React from "react";

const MovieLaneCard = ({ backdropPath, posterPath, name, nr }) => {
  console.log(nr);
  return (
    <div className="movieLaneCard">
      {/* <div className="svgNumber">
        <svg className="place" viewBox="0 0 450 50">
          <text y="50">{nr}</text>
        </svg>
      </div>
      <div className="moevieImage">
      <img className="poster" src={posterPath} alt="" />
      </div> */}
    </div>
  );
};

export default MovieLaneCard;
