import React from "react";

const MovieCardKnownFor = ({ backdrop }) => {
  return (
    <div style={{ width: "30rem" }}>
      <img
        style={{ width: "100%" }}
        src={`https://image.tmdb.org/t/p/original/${backdrop}`}
        alt=""
      />
    </div>
  );
};

export default MovieCardKnownFor;
