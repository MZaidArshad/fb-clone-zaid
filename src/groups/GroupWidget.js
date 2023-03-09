import { Button } from "@mui/material";
import React from "react";
import "./GroupWidget.css";

const GroupWidget = () => {
  return (
    <div className="groupWidgets">
      <div className="groupWidgets__head">
        <div>
          <h4>Friend's groups</h4>
          <span>Groups your friends are in.</span>
        </div>
        <Button className="groupWidgets__head__seeMoreBtn">See more</Button>
      </div>
      <div className="groupWidgets__card">
        <div className="groupWidgets__card__img">
          <img src="https://loremflickr.com/320/240" alt="" />
        </div>
        <div className="groupWidgets__card__content">
          <div className="groupWidgets__card__content__heading">
            <h4>Rahim Yar Khan</h4>
            <span>67K members . 10 posts a day</span>
          </div>
          <button className="groupWidgets__card__content__followBtn">
            Follow Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupWidget;
