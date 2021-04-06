import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components

// pages
import Home from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  );
};

export default App;
