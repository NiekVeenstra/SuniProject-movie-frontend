import React, { useState } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Footer from "./components/Footer/Footer";

// components
import Navbar from "./components/Navbar/NavBar";
import BlankPage from "./pages/BlankPage";
import PlayVideo from "./components/Discover/PlayVideo";
// pages
import HomePage from "./pages/HomePage";
import { Context } from "./Context/Context";
import MoviesPage from "./pages/MoviesPage";
import PlayMovie from "./components/Discover/MovieLanes/MovieLaneStandard/PlayMovie";

const App = withRouter(({ location }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [movieInfo, setMovieInfo] = useState(false);
  const [playVideo, setPlayVideo] = useState("");
  const [playMovie, setPlayMovie] = useState("");
  const [movieInfoAbout, setMovieInfoAbout] = useState(false);
  const [movieInfoVideo, setMovieInfoVideo] = useState({});
  // const [videoInfoID, setVideoInfoID] = useState("000000");
  // console.log(movieInfo);
  return (
    <div>
      <Context.Provider
        value={{
          moreInfo,
          setMoreInfo,
          playVideo,
          setPlayVideo,
          playMovie,
          setPlayMovie,
          movieInfo,
          setMovieInfo,
          movieInfoAbout,
          setMovieInfoAbout,
          movieInfoVideo,
          setMovieInfoVideo,
        }}
      >
        {location.pathname !== "/watch" && location.pathname !== "/watch-movie" && <Navbar />}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/blank" component={BlankPage} />
        <Route exact path="/watch" component={PlayVideo} />
        <Route exact path="/watch-movie" component={PlayMovie} />
        {location.pathname !== "/watch" &&
          location.pathname !== "/blank" &&
          location.pathname !== "/watch-movie" && <Footer />}
      </Context.Provider>
    </div>
  );
});

export default App;
