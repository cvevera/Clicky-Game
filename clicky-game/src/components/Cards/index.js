import React from "react";
import "./style.css";


const Card = props => (
    <div className="card col-md-3">
        <img className="images" alt={props.name} src={props.image} />
    </div>
)

export default Card;