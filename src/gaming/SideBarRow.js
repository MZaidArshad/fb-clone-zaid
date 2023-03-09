import React from "react";
import "./SidebarRow.css";

const SideBarRow = ({ Icon, title, active }) => {
  return (
    <div
      className={`game_sideBarRow ${active ? "game_sideBarRow--active" : ""}`}
    >
      {<Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;
