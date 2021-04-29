import React from "react";
import DiscoverPreview from "../components/Discover/DiscoverPreview";
import MovieLane from "../components/Discover/MovieLane/MovieLane";


const HomePage = () => {
  return (
    <div className="home-page">
      <DiscoverPreview />
      <MovieLane/>
      <MovieLane/>
      <div className="box"></div>
    </div>
  );
};

export default HomePage;
