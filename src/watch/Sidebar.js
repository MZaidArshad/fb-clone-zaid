import React from "react";
import "./Sidebar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import SideBarRow from "./SideBarRow";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Sidebar = () => {
  return (
    <div className="g_sidebar">
      <div className="g_sidebar__heading">
        <h2>Watch</h2>
        <IconButton className="g_sidebar__heading__settingBtn">
          <SettingsIcon />
        </IconButton>
      </div>
      <div className="g_sidebar__body">
        <div className="g_sidebar_body__search">
          <SearchIcon />
          <input type="text" placeholder="Search videos" />
        </div>
        <SideBarRow Icon={SmartDisplayIcon} title="Home" active="true" />
        <SideBarRow Icon={VideoCameraFrontIcon} title="Live" />
        <SideBarRow Icon={MovieFilterIcon} title="Shows" />
        <SideBarRow Icon={BookmarkIcon} title="Saved videos" />
      </div>
    </div>
  );
};

export default Sidebar;
