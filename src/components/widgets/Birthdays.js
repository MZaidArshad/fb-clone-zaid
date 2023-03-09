import { CardGiftcard } from "@mui/icons-material";
import React from "react";
import "./Birthdays.css";

const Birthdays = () => {
  return (
    <div className="birthday">
      <div className="birthday__heading">
        <div className="birthday__heading__text">
          <span>Birthdays</span>
        </div>
      </div>
      <div className="birthday__body">
        <div className="birthday__body__icon">
          <CardGiftcard />
        </div>
        <div className="birthday__body__content">
          <span>
            <strong>Rawan Jee</strong> and <strong>11 others</strong> have their
            birthdays today
          </span>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
