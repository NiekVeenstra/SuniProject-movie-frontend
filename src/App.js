import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar/NavBar";

// pages
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <Router>
      <Navbar/>
      <div>
        <Route exact path="/" component={HomePage}/>
      </div>
    </Router>
  );
};

export default App;
