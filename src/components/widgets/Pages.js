import React from "react";
import "./Pages.css";
import PagesRow from "./PagesRow";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IconButton } from "@mui/material";

const Pages = () => {
  return (
    <div className="pages">
      <div className="pages__heading">
        <div className="pages__heading__text">
          <span>Your Pages and profiles</span>
        </div>
        <div className="pages__heading__icons">
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="pages__body">
        <PagesRow />
      </div>
    </div>
  );
};

export default Pages;
