import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Footer from "./components/Footer/Footer";

// components
import Navbar from "./components/Navbar/NavBar";
import PlayVideo from "./components/Discover/PlayVideo";

// pages
import HomePage from "./pages/HomePage";

const App = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname != "/watch" && <Navbar />}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/watch" component={PlayVideo} />
      {location.pathname != "/watch" && <Footer />}
    </div>
  );
});

export default App;
