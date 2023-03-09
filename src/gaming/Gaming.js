import React from "react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import "./Gaming.css";
import GameFeed from "./GameFeed";

const Gaming = () => {
  return (
    <div className="gaming">
      <Header active={5} />
      <div className="gaming__body">
        <Sidebar />
        <GameFeed />
      </div>
    </div>
  );
};

export default Gaming;
