import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header-icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="logo"
      />
      <div className="header-center">
        <input type="text" className="header-input" />
        <SearchIcon />
      </div>
      <div className="header-right">
        <p>Hazte anfitrión</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
