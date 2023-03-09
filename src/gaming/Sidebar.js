import React from "react";
import "./Sidebar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import SideBarRow from "./SideBarRow";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import GroupsIcon from "@mui/icons-material/Groups";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import SportsGolfIcon from "@mui/icons-material/SportsGolf";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import CastleIcon from "@mui/icons-material/Castle";
import CasinoIcon from "@mui/icons-material/Casino";
import CalculateIcon from "@mui/icons-material/Calculate";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const Sidebar = () => {
  return (
    <div className="game_sidebar">
      <div className="game_sidebar__heading">
        <h2>Gaming</h2>
        <IconButton className="game_sidebar__heading__settingBtn">
          <SettingsIcon />
        </IconButton>
      </div>
      <div className="game_sidebar__search">
        <SearchIcon />
        <input type="text" placeholder="Search gaming" />
      </div>
      <div className="game_sidebar__body">
        <SideBarRow
          Icon={VideogameAssetIcon}
          title="Play games"
          active="true"
        />
        <SideBarRow Icon={PermIdentityIcon} title="Gaming Activity" />
        <SideBarRow Icon={NotificationsIcon} title="Notifications" />
        <hr />
        <div className="game_sidebar__body__filters">
          <h3>My games</h3>
          <span>
            Save a game to "My games" to create a shortcut for it here.
          </span>
        </div>
        <hr />
        <div className="game_sidebar__body__categories">
          <SideBarRow Icon={VideogameAssetIcon} title="All games" />
          <SideBarRow Icon={ConnectingAirportsIcon} title="Action" />
          <SideBarRow Icon={GroupsIcon} title="Advanture" />
          <SideBarRow Icon={ConnectingAirportsIcon} title="Arcade" />
          <SideBarRow Icon={BackupTableIcon} title="Battle" />
          <SideBarRow Icon={SportsGolfIcon} title="Board" />
          <SideBarRow Icon={ModeStandbyIcon} title="Card" />
          <SideBarRow Icon={CasinoIcon} title="Casino" />
          <SideBarRow Icon={CastleIcon} title="Builder" />
          <SideBarRow Icon={LocalFloristIcon} title="Design" />
          <SideBarRow Icon={CalculateIcon} title="Match" />
          <SideBarRow Icon={HolidayVillageIcon} title="Merge" />
          <SideBarRow Icon={DirectionsRunIcon} title="Runner" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
