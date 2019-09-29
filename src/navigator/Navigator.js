import React from "react";
import menu_icon from "../img/menu_icon.png";
import logo_icon from "../img/logo_icon.png";
import setting_icon from "../img/setting_icon.png";
import {detailSearchClickHandler} from './Navigator.module.mjs';
import "./Navigator.css";
import {Link} from 'react-router-dom';

class Navigator extends React.Component {
  render() {
    return (
      <div className="navigator">
        <div className="navigator-logo">
          <img className="navigator-menu-icon" src={menu_icon} alt="menu" />
          <img className="navigator-logo-icon" src={logo_icon} alt="logo" />
          <img
            className="navigator-setting-icon"
            src={setting_icon}
            alt="setting"
          />
        </div>
        <div className="navigator-button">
          <div className="navigator-home-button">
            <Link to="/">
              Home
            </Link>
          </div>
          <div className="navigator-detail-search-button" onClick={detailSearchClickHandler}>Search</div>
        </div>
      </div>
    );
  }
}

export default Navigator;
