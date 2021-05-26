import React from "react";
import DiscoverPreview from "../components/Discover/DiscoverPreview";
import MovieInfoCard from "../components/Discover/MovieLanes/MovieLaneStandard/MovieInfoCard";
import MovieLane from "../components/Discover/MovieLanes/MovieLaneStandard/MovieLane";
import MovieLaneTop9 from "../components/Discover/MovieLanes/MovieLaneTop9/MovieLaneTop9";

const HomePage = () => {
  return (
    <div className="home-page">
      <MovieInfoCard/>
      <DiscoverPreview />
      <MovieLaneTop9 />
      <MovieLane
        idd="1"
        genreName="00's movies"
        genre="primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31"
      />
      <MovieLane
        idd="2"
        genreName="90's movies"
        genre="primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31"
      />
      <MovieLane
        idd="3"
        genreName="80's movies"
        genre="primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31"
      />
      <MovieLane idd="4" genreName="Disney movies" genre="with_companies=3475" />
      <MovieLane idd="5" genreName="movies with Keanu Reeves" genre="with_people=6384" />

      <MovieLane idd="6" genreName="Komedie" genre="with_genres=35" />
      <MovieLane idd="7" genreName="Actie" genre="with_genres=28" />
      <MovieLane idd="8" genreName="Thriller" genre="with_genres=53" />
      <MovieLane idd="9" genreName="Familie" genre="with_genres=10751" />
      <MovieLane idd="10" genreName="Fantasie" genre="with_genres=14" />
      <MovieLane idd="11" genreName="Avontuur" genre="with_genres=12" />
    </div>
  );
};

export default HomePage;
