import React from "react";
import { Link } from "react-router-dom";
import FrdRequestBox from "./FrdRequestBox";
import "./FrdRequests.css";

const FrdRequests = () => {
  return (
    <div className="frdRequests">
      <div className="frdRequests__heading">
        <div className="frdRequests__heading__text">
          <span>Friend requests</span>
        </div>
        <div className="frdRequests__heading__icons">
          <Link className="frdRequests__heading__icons__link">
            <span>See All</span>
          </Link>
        </div>
      </div>
      <div className="frdRequests__body">
        <FrdRequestBox
          pageAvatarImg="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
          name="Ali Raza"
          time="5 min"
          mutualFrds={11}
        />
      </div>
    </div>
  );
};

export default FrdRequests;
