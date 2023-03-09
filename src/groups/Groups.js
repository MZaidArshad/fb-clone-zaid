import React from "react";
import Feed from "./Feed";
import Header from "../components/Header";
import "./Groups.css";
import Sidebar from "./Sidebar";
import GroupWidget from "./GroupWidget";

const Groups = () => {
  return (
    <div className="groups">
      <Header active={4} />
      <div className="groups__body">
        <Sidebar />
        {/* GroupFeed */}

        <GroupWidget />
        <Feed />
        {/* Widget */}
      </div>
    </div>
  );
};

export default Groups;
