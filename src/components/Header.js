import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import { Avatar, Badge, Tooltip } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function Header({ active }) {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  const [showSearch, setShowSearch] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [{ user }] = useStateValue();

  const showOptions = () => {
    setShowOption(!showOption);
  };

  const logOut = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
    console.log("loged out Successfully");
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
            alt=""
          />
          <h3>facebook</h3>
        </div>
        <div className="header__input">
          {!showSearch && (
            <SearchIcon
              onClick={() => {
                setShowSearch(true);
              }}
            />
          )}
          {showSearch && (
            <SearchIcon
              onClick={() => {
                setShowSearch(false);
              }}
            />
          )}
          {showSearch && (
            <input
              className="header__input__input"
              type="text"
              placeholder="Search Facebook"
            />
          )}
        </div>
      </div>
      <div className="header__main">
        <div className="header__center">
          <MenuIcon className="header__center__menuIcon" />
          <Link to="/">
            <Tooltip title="Home">
              <div
                className={`header__option ${
                  active === 1 ? "header__option--active" : ""
                }`}
              >
                <HomeIcon fontSize="large" />
              </div>
            </Tooltip>
          </Link>
          <Link to="/watch">
            <Tooltip title="Videos">
              <div
                className={`header__option ${
                  active === 2 ? "header__option--active" : ""
                }`}
              >
                <OndemandVideoIcon fontSize="large" />
              </div>
            </Tooltip>
          </Link>
          <Link to="/marketplace">
            <Tooltip title="Marketplace">
              <div
                className={`header__option ${
                  active === 3 ? "header__option--active" : ""
                }`}
              >
                <StorefrontOutlinedIcon fontSize="large" />
              </div>
            </Tooltip>
          </Link>
          <Link to="/groups">
            <Tooltip title="Groups">
              <div
                className={`header__option ${
                  active === 4 ? "header__option--active" : ""
                }`}
              >
                <SupervisedUserCircleIcon fontSize="large" />
              </div>
            </Tooltip>
          </Link>
          <Link to="/gaming">
            <Tooltip title="Gaming">
              <div
                className={`header__option ${
                  active === 5 ? "header__option--active" : ""
                }`}
              >
                <VideogameAssetOutlinedIcon fontSize="large" />
              </div>
            </Tooltip>
          </Link>
        </div>
        <div className="header__right">
          <div className="header__info">
            <Tooltip title="Menu" className="responsive__app">
              <AppsIcon />
            </Tooltip>
            <Tooltip title="Messenger">
              <Badge badgeContent={3} overlap="circular">
                <MapsUgcIcon />
              </Badge>
            </Tooltip>
            <Tooltip title="Notifications">
              <Badge badgeContent={5} overlap="circular">
                <NotificationsIcon />
              </Badge>
            </Tooltip>
            <Avatar src={user.photoURL} onClick={showOptions} />
          </div>
        </div>
      </div>
      <div
        className={`header__right__options ${
          showOption ? "header__right__options__active" : ""
        }`}
      >
        <div className="header__right__options__option" onClick={logOut}>
          <LogoutIcon />
          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
