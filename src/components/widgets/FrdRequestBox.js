import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import "./FrdRequestBox.css";

const FrdRequestBox = ({ pageAvatarImg, name, time, mutualFrds }) => {
  return (
    <div className="frdRequest">
      <div className="frdRequest__avatar">
        <Avatar src={pageAvatarImg} />
      </div>
      <div className="frdRequest__content">
        <div className="frdRequest__content__name">
          <span>
            <strong>{name}</strong>
          </span>
          <span className="frdRequest__content__time">{time} ago</span>
        </div>

        {mutualFrds && (
          <div className="frdRequest__content__mutualFrds">
            <AvatarGroup className="frdRequest__content__mutualFrds__avatarGroup">
              <Avatar
                src="https://i.pravatar.cc/150?img=13"
                className="frdRequest__content__mutualFrds__avatar"
              />
              <Avatar
                src="https://i.pravatar.cc/150?img=14"
                className="frdRequest__content__mutualFrds__avatar"
              />
            </AvatarGroup>
            <span>{mutualFrds} mutual friends</span>
          </div>
        )}
        <div className="frdRequest__content__buttons">
          <button className="frdRequest__content__confirmBtn">Confirm</button>
          <button className="frdRequest__content__deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default FrdRequestBox;
