import React from "react";
import "./Contacts.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IconButton } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import ContactRow from "./ContactRow";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__heading">
        <div className="contacts__heading__text">
          <span>Contacts</span>
        </div>
        <div className="contacts__heading__icons">
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="contacts__heading__body">
        <ContactRow
          profileImgSrc="https://i.pravatar.cc/150?img=10"
          name="Malik Arslan Awan"
          isOnline={true}
        />
        <ContactRow
          profileImgSrc="https://i.pravatar.cc/150?img=14"
          name="Zeeshan Sidique"
          isOnline={true}
        />
        <ContactRow
          profileImgSrc="https://i.pravatar.cc/150?img=15"
          name="Assadullah Bajwa"
          isOnline={true}
        />
        <ContactRow
          profileImgSrc="https://i.pravatar.cc/150?img=16"
          name="Usama Ladla"
          isOnline={true}
        />
        <ContactRow
          profileImgSrc="https://i.pravatar.cc/150?img=17"
          name="Amir Shahzad"
          isOnline={true}
        />
        <ContactRow
          profileImgSrc="https://i.pravatar.cc/150?img=18"
          name="Ahmad Chotu"
          isOnline={true}
        />
        <ContactRow
          profileImgSrc="https://i.pravatar.cc/150?img=19"
          name="Harris Qyoum"
          isOnline={true}
        />
        <ContactRow
          profileImgSrc="https://i.pravatar.cc/150?img=21"
          name="Iman Bari"
          isOnline={true}
        />
      </div>
    </div>
  );
};

export default Contacts;
