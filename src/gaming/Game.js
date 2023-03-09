import React from "react";
import "./Game.css";

const Game = ({ thumbnail, title, players }) => {
  return (
    <div className="game">
      <img className="game__img" src={thumbnail} alt="" />
      <div className="game__details">
        <p>{title}</p>
        <span>{players} players</span>
      </div>
    </div>
  );
};

export default Game;
