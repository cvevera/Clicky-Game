import React from "react";
import "./style.css";


const Card = props => (
    <div className="card col-md-3">
        <img className="images {props.name}" alt={props.id} src={props.image} onClick={props.handleGuess} />
    </div>
)

export default Card;