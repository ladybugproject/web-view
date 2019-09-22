import React from "react";
import menu_icon from "../img/menu_icon.png";
import logo_icon from "../img/logo_icon.png";
import setting_icon from "../img/setting_icon.png";

class Navigator extends React.Component {
  render() {
    return (
      <div className="navigator">
        <div className="navigator-logo">
          <img src={menu_icon} alt="menu" />
          <img src={logo_icon} alt="logo" />
          <img src={setting_icon} alt="setting" />
        </div>
        <div className="navigator-button"></div>
      </div>
    );
  }
}

export default Navigator;
