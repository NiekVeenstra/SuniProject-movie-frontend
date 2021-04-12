import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';

// components
import Navbar from "./components/Navbar/NavBar";
import BlankPage from "./pages/BlankPage";

// pages
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    
        <Router>
          <Navbar/>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/blank" component={BlankPage}/>
          </div>
          <Footer />
        </Router>
 
  );
};

export default App;
