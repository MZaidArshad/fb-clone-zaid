import React from "react";
import "./Sidebar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import SideBarRow from "./SideBarRow";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import ExploreIcon from "@mui/icons-material/Explore";
import AddIcon from "@mui/icons-material/Add";
import SidebarGroupRow from "./SidebarGroupRow";

const Sidebar = () => {
  return (
    <div className="grp_sidebar">
      <div className="grp_sidebar__heading">
        <h2>Groups</h2>
        <IconButton className="grp_sidebar__heading__settingBtn">
          <SettingsIcon />
        </IconButton>
      </div>
      <div className="grp_sidebar__search">
        <SearchIcon />
        <input type="text" placeholder="Search groups" />
      </div>
      <div className="grp_sidebar__body">
        <SideBarRow Icon={FeedIcon} title="Your Feed" active="true" />
        <SideBarRow Icon={ExploreIcon} title="Discover" />

        <div className="grp_sidebar__body__addListingBtn">
          <AddIcon />
          <p>Create New Group</p>
        </div>
        <hr />
        <div className="grp_sidebar__body__filters">
          <h3>Groups you manage</h3>
          <SidebarGroupRow
            pageProfileImgUrl="https://i.pravatar.cc/150?img=19"
            title="Smart Editors"
            lastScene="1 year"
          />
          <SidebarGroupRow
            pageProfileImgUrl="https://i.pravatar.cc/150?img=20"
            title="Mooj Masti"
            lastScene="a week"
          />
        </div>
        <hr />
        <div className="grp_sidebar__body__categories">
          <h3>Groups you've joined</h3>
          <SidebarGroupRow
            pageProfileImgUrl="https://i.pravatar.cc/150?img=21"
            title="Hum Nawa"
            lastScene="a week"
          />
          <SidebarGroupRow
            pageProfileImgUrl="https://i.pravatar.cc/150?img=22"
            title="Startup Pakistan"
            lastScene="a day"
          />
          <SidebarGroupRow
            pageProfileImgUrl="https://i.pravatar.cc/150?img=23"
            title="Logo Designer"
            lastScene="a week"
          />
          <SidebarGroupRow
            pageProfileImgUrl="https://i.pravatar.cc/150?img=24"
            title="Pakistani Youth"
            lastScene="a min"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
