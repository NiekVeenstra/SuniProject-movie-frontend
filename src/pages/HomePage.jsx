import React from "react";
import DiscoverPreview from "../components/Discover/DiscoverPreview";
import MovieLane from "../components/Discover/MovieLanes/MovieLaneStandard/MovieLane";
import MovieLaneTop9 from "../components/Discover/MovieLanes/MovieLaneTop9/MovieLaneTop9";


const HomePage = () => {
  return (
    <div className="home-page">
      <DiscoverPreview />
      <MovieLaneTop9/>
      <MovieLane/>
      <div className="box"></div>
    </div>
  );
};

export default HomePage;
