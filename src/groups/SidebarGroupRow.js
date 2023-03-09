import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarGroupRow.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const SidebarGroupRow = ({ pageProfileImgUrl, title, lastScene }) => {
  return (
    <div className="sidebarGroupRow">
      <Avatar
        src={pageProfileImgUrl}
        variant="rounded"
        className="sidebarGroupRow__pageProfile"
      />
      <div className="sidebarGroupRow__details">
        <div className="sidebarGroupRow__details__content">
          <h4>{title}</h4>
          <span>Last active {lastScene} ago</span>
        </div>
        <div>
          <ChevronRightIcon className="sidebarGroupRow__details__icon" />
        </div>
      </div>
    </div>
  );
};

export default SidebarGroupRow;
