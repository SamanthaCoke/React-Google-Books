import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import GoogleSearch from "./components/GoogleSearch";
import Saved from "./components/Save";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Router>
          <h1>Welcome Google API Book GoogleSearch</h1>
          <nav id="nav">
            <Link to="/search" style={{margin: '10px'}}><button className="btn btn-primary">Search</button></Link>
            <Link to="/saved">Saved</Link>
          </nav>
          <Route path="/search" component={GoogleSearch} />
          <Route path="/saved" component={Saved} />
        </Router>
      </div>
    );
  }
}

export default App;
