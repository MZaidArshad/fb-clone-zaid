import React from "react";
import "./Home.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
const Home = () => {
  return (
    <div className="home">
      <Header active={1} />
      <div className="home__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
};

export default Home;
