import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import cards from "./cards.json"


import "./App.css";



function App() {




  return (
 <div>
   <Nav>Star Wars Gif Memory Game!</Nav>
   <Wrapper>
                {cards.map(card => (
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

export default App;
