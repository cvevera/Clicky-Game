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
  guesses: [],
  bestScore: 0
}

handleGuess = event => {
  const id = event.target.attributes.getNamedItem("alt").value;
  console.log(id)
  this.shuffleCards();
  this.clickCheck(id);
  this.updateBestScore(this.state)
}

shuffleArray = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

shuffleCards = () => {
  this.setState(this.state.cards = this.shuffleArray(this.state.cards))
}

clickCheck = (id) => {
  const updateState = { ...this.state };
  if (updateState.guesses.includes(id)) {
    updateState.guesses = [];
    updateState.yourScore = 0;
    alert("You've already picked that one. Try again!")
    console.log(updateState.guesses);
    this.setState(this.state = updateState);
  } else {
    updateState.guesses.push(id)
    this.setState(this.state = updateState)
    updateState.yourScore++
    console.log(updateState.guesses)
  }
  return updateState
}

updateBestScore = (updateState) => {
  if (updateState.guesses.length > updateState.bestScore) {
    updateState.bestScore++
    this.setState(this.state = updateState)
  }
  return updateState
}

render() {
  return (
 <div>
   <Nav yourScore={this.state.yourScore} bestScore={this.state.bestScore}>Star Wars Gif Memory Game!</Nav>
   <Wrapper>
                {this.state.cards.map(card => (
                    <Card
                        handleGuess={this.handleGuess}
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
