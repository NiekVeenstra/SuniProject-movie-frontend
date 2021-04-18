import React from "react";
import DiscoverPreview from "../components/Discover/DiscoverPreview";
// import MovieInfo from "../components/Discover/MovieInfo/MovieInfo";


const HomePage = () => {
  return (
    <div className="home-page">
      <DiscoverPreview />
      {/* <MovieInfo /> */}
      <div className="box"></div>
    </div>
  );
};

export default HomePage;
