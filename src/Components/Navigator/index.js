import React from "react";
import { Link } from "react-router-dom";
import Setup from "./setup.svg";
import Logo from "./logo.png";
import Settings from "./settings.svg";
import "./Navigator.css";

class Navigator extends React.Component {
	render() {
		return (
			<div className={"navigator"}>
				<div className={"menu-icon"}>
					<img className={"navigator-menu-icon left"} src={Setup} alt={Setup} />
					<Link to="/home">
						<img className={"center"} src={Logo} alt={Logo} />
					</Link>
					<img className={"navigator-menu-icon right"} src={Settings} alt={Setup} />
				</div>
				<div className={"navigator-menu-btn"}>
					<Link to="/home">
						<button className={"navigator-btn selected"}>HOME</button>
					</Link>
					<Link to={"/detailSearch"}>
						<button className={"navigator-btn"}>상세검색</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Navigator;
