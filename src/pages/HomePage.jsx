import React from "react";
import DiscoverPreview from "../components/Discover/DiscoverPreview";
import MovieLane from "../components/Discover/MovieLanes/MovieLaneStandard/MovieLane";
import MovieLaneTop9 from "../components/Discover/MovieLanes/MovieLaneTop9/MovieLaneTop9";

const HomePage = () => {
  return (
    <div className="home-page">
      <DiscoverPreview />
      <MovieLaneTop9 />
      <MovieLane genre="primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31" />
      <div className="box"></div>
    </div>
  );
};

export default HomePage;
