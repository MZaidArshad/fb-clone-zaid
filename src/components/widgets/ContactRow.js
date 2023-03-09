import { Avatar, Badge } from "@mui/material";
import React from "react";
import "./ContactRow.css";

// import CircleIcon from "@mui/icons-material/Circle";

const ContactRow = ({ profileImgSrc, name, isOnline }) => {
  return (
    <div className="contactRow">
      <div>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          invisible={!isOnline}
        >
          <Avatar
            className="contactRow__avatar"
            src={profileImgSrc}
            alt="Remy Sharp"
          />
        </Badge>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default ContactRow;
