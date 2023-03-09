import React from "react";
import "./SidebarRow.css";

const SideBarRow = ({ Icon, title, active }) => {
  return (
    <div className={`g_sideBarRow ${active ? "g_sideBarRow--active" : ""}`}>
      {<Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SideBarRow;
