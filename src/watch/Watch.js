import React from "react";
import "./Watch.css";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import VideoFeed from "./VideoFeed";

const Watch = () => {
  return (
    <div className="watch">
      <Header active={2} />
      <div className="watch__body">
        <Sidebar />
        <VideoFeed />
      </div>
    </div>
  );
};

export default Watch;
