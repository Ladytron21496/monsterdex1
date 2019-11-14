import React from "react";
import "./card-list-style.css";
import { Card } from "./card.jsx";

export const CardList = function(props) {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.key} monster={monster}></Card>
      ))}
    </div>
  );
};
