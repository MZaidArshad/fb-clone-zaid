import React, { useEffect } from "react";
import Game from "./Game";
import "./GameFeed.css";
import data from "./games.json";

const GameFeed = () => {
  return (
    <div className="gameFeed">
      <div className="gameFeed__heading">
        <h2>All games</h2>
      </div>
      <div className="gameFeed__body">
        {data?.map((game) => {
          return (
            <Game
              key={game.id}
              thumbnail={game.background_image}
              title={game.name}
              players={`${Math.floor(Math.random() * 1000)}K`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameFeed;
