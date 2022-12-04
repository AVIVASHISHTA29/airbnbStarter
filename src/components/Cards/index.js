import React from "react";
import { list } from "../../assets/cards-list";
import Card from "./card";
import "./styles.css";
function Cards() {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;
