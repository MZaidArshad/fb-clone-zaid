import React from "react";
import "./Sidebar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import SideBarRow from "./SideBarRow";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InboxIcon from "@mui/icons-material/Inbox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SellIcon from "@mui/icons-material/Sell";
import AddIcon from "@mui/icons-material/Add";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HouseIcon from "@mui/icons-material/House";
import StyleIcon from "@mui/icons-material/Style";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PoolIcon from "@mui/icons-material/Pool";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GroupsIcon from "@mui/icons-material/Groups";

const Sidebar = () => {
  return (
    <div className="m_sidebar">
      <div className="m_sidebar__heading">
        <h2>Marketplace</h2>
        <IconButton className="m_sidebar__heading__settingBtn">
          <SettingsIcon />
        </IconButton>
      </div>
      <div className="m_sidebar__search">
        <SearchIcon />
        <input type="text" placeholder="Search Marketplace" />
      </div>
      <div className="m_sidebar__body">
        <SideBarRow Icon={StorefrontIcon} title="Browse All" active="true" />
        <SideBarRow Icon={NotificationsIcon} title="Notifications" />
        <SideBarRow Icon={InboxIcon} title="Inbox" />
        <SideBarRow Icon={ShoppingBagIcon} title="Buying" />
        <SideBarRow Icon={SellIcon} title="Selling" />
        <div className="m_sidebar__body__addListingBtn">
          <AddIcon />
          <p>Create New listing</p>
        </div>
        <hr />
        <div className="m_sidebar__body__filters">
          <h3>Filters</h3>
          <span>Faisalabad. within 40 Kilometers</span>
        </div>
        <hr />
        <div className="m_sidebar__body__categories">
          <SideBarRow Icon={DirectionsCarIcon} title="Vehicles" />
          <SideBarRow Icon={HouseIcon} title="Property for rent" />
          <SideBarRow Icon={StyleIcon} title="Classifieds" />
          <SideBarRow Icon={CheckroomIcon} title="Clothing" />
          <SideBarRow Icon={SmartphoneIcon} title="Electronics" />
          <SideBarRow Icon={PhotoCameraFrontIcon} title="Entertainment" />
          <SideBarRow Icon={FavoriteIcon} title="Family" />
          <SideBarRow Icon={LoyaltyIcon} title="Free Stuf" />
          <SideBarRow Icon={LocalFloristIcon} title="Garden and Outdoors" />
          <SideBarRow Icon={DriveFileRenameOutlineIcon} title="Hobbies" />
          <SideBarRow Icon={HolidayVillageIcon} title="Office Supplies" />
          <SideBarRow Icon={PoolIcon} title="Sporting goods" />
          <SideBarRow Icon={SportsEsportsIcon} title="Toys & games" />
          <SideBarRow Icon={GroupsIcon} title="Buy-and-Sell groups" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
