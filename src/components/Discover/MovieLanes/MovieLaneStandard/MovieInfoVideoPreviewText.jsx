import React from "react";

const MovieInfoVideoPreviewText = ({ movieAllInfo }) => {
  return (
    <div className="movieInfoVideoPreviewText" >
      <div className="movieInfo-left">
        <p>
          Rated <span style={{color: "green"}}>{movieAllInfo.vote_average} in popularity.</span> {movieAllInfo.runtime}min
        </p>
        <br/>
        <p>
          {movieAllInfo.title}
        </p>
        <br/>
        <p className="hideInfo">
          {movieAllInfo.overview}
        </p>
      </div>
      <div className="movieInfo-right">
        <p>
          Release date: {movieAllInfo.release_date}
        </p>
        <br/>
        <p>
          Genres: {movieAllInfo ? movieAllInfo.genres.map((genre)=>(
            <span>{genre.name}, </span>
          )) : <span>Action, </span>}
        </p>
        <br/>
        <p>
          Production: {movieAllInfo ? movieAllInfo.production_companies.map((prod)=>(
            <span>{prod.name}, </span>
          )): <span>Warner Brothers, </span>}
        </p>
      </div>
    </div>
  );
};

export default MovieInfoVideoPreviewText;
