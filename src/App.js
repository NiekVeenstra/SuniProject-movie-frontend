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

const App = withRouter(({ location }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [playVideo, setPlayVideo] = useState("");
  // const [videoInfoID, setVideoInfoID] = useState("000000");
  // console.log(playVideo);
  return (
    <div>
      <Context.Provider value={{ moreInfo, setMoreInfo, playVideo, setPlayVideo}}>
        {location.pathname !== "/watch" && <Navbar />}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/blank" component={BlankPage} />
        <Route exact path="/watch" component={PlayVideo} />
        {location.pathname !== "/watch" && location.pathname !== "/blank" && <Footer />}
      </Context.Provider>
    </div>
  );
});

export default App;
