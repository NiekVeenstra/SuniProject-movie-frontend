import React from "react";
import DiscoverPreview from "../components/Discover/DiscoverPreview";
import MovieLane from "../components/Discover/MovieLanes/MovieLaneStandard/MovieLane";

const MoviesPage = () => {
  return (
    <div className="home-page">
      <DiscoverPreview />

      <MovieLane idd="6" genreName="Komedie" genre="with_genres=35" />
      <MovieLane idd="7" genreName="Actie" genre="with_genres=28" />
      <MovieLane idd="8" genreName="Thriller" genre="with_genres=53" />
      <MovieLane idd="9" genreName="Familie" genre="with_genres=10751" />
      <MovieLane idd="10" genreName="Fantasie" genre="with_genres=14" />
      <MovieLane idd="11" genreName="Avontuur" genre="with_genres=12" />
    </div>
  );
};

export default MoviesPage;
