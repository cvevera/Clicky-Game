import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import cards from "./cards.json"


import "./App.css";


class App extends Component {

state = {
  cards,
  yourScore: 0,
  bestScore: 0
}

render() {
  return (
 <div>
   <Nav yourScore={this.state.yourScore} bestScore={this.state.bestScore}>Star Wars Gif Memory Game!</Nav>
   <Wrapper>
                {this.state.cards.map(card => (
                    <Card
                        id={card.id}
                        key={card.id}
                        image={card.image}
                    />
                ))}
                </Wrapper>
</div>
  
  );
}
}

export default App;
