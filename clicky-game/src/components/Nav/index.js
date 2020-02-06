import React from "react";
import "./style.css";

function Nav(props) {
  return <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Star Wars Memory Game</h1>
    <p className="lead">Click all the Gifs to win. Don't pick the same one twice!</p>
    <div className ="container">
    <div className ="row">
        <div className="col-6"><h3>High Score {props.bestScore}</h3></div>
        <div className="col-6"><h3>Your Score {props.yourScore}</h3></div>
    </div>

    </div>
  </div>
</div>
}

export default Nav;