import { Avatar } from "@mui/material";
import React from "react";
import "./PagesRow.css";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

const PagesRow = () => {
  return (
    <div className="pagesRow">
      <div className="pagesRow__main">
        <Avatar
          src="https://i.pravatar.cc/300"
          sx={{ width: 30, height: 30 }}
          className="pagesRow__avatar"
        />
        <h4>Smart Editors</h4>
      </div>
      <div className="pagesRow__item">
        <ChangeCircleOutlinedIcon />
        <span>Switch Into Page</span>
      </div>
      <div className="pagesRow__item">
        <CampaignOutlinedIcon />
        <span>Create Promotion</span>
      </div>
    </div>
  );
};

export default PagesRow;
