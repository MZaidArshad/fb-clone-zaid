import React from "react";
import "./Widget.css";
import Birthdays from "./widgets/Birthdays";
import Contacts from "./widgets/Contacts";
import FrdRequests from "./widgets/FrdRequests";
import Pages from "./widgets/Pages";

const Widget = () => {
  return (
    <div className="widgets">
      <Pages />
      <hr />
      <FrdRequests />
      <hr />
      <Birthdays />
      <hr />
      <Contacts />
      {/* Group Conversations */}
    </div>
  );
};

export default Widget;
