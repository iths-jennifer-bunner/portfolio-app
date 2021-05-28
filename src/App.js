import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.scss";
import Home from "./components/pages/Home";
// import Navbar from "./components/Navbar";
import Canvas from "./components/pages/Canvas";
import GuessTheNumber from "./components/pages/GuessTheNumber";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/canvas" component={Canvas} />
          <Route path="/guessTheNumber" component={GuessTheNumber} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
