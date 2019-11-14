import React from "react";
import "./card-style.css";
export const Card = function(props) {
  return (
    <div className="card-container">
      <img
        alt="robots"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <p key={props.monster.key}>{props.monster.name}</p>
      <p>{props.monster.email}</p>
    </div>
  );
};
