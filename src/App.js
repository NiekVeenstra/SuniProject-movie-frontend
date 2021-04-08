import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';

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
          <Footer />
        </Router>
 
  );
};

export default App;
