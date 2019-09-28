import React from "react";
import "./recommend.css";

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = { concert: [] };
  }
  componentDidMount() {
    fetch("http://54.180.119.173:3000/test")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ concert: data });
      });
  }
  render() {
    const { concert } = this.state;
    if (concert.length === 0) return <div></div>;
    const url = concert[1].POSTER;
    const title = concert[1].PRFNM
    const location = concert[1].FCLTYNM;
    const dateStart = concert[1].PRFPDFROM;
    const dateFinish = concert[1].PRFPDTO;
    const actor = concert[1].PRFCAST;
    return (
      <div className="wrap-recommend">
        <div className="recommend-title">어머! 이건 꼭 봐야해!</div>
        <div className="recommend-slider">
          <div className="wrap-recommend-item">
            <img
              className="recommend-item-poster"
              src={url}
              alt="sample"
            />
            <div className="recommend-item-info">
              <div className="recommend-item-title">{title}</div>
              <div className="recommend-item-location">
                {location}
              </div>
              <div className="recommend-item-date">
                {dateStart} ~ {dateFinish}
              </div>
              <div className="recommend-item-actor">{actor}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
