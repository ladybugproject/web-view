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
    return (
      <div className="wrap-recommend">
        <div className="recommend-title">어머! 이건 꼭 봐야해!</div>
        <div className="recommend-slider">
          <div className="wrap-recommend-item">
            <img
              className="recommend-item-poster"
              src={concert[1].POSTER}
              alt="sample"
            />
            <div className="recommend-item-info">
              <div className="recommend-item-title">{concert[1].PRFNM}</div>
              <div className="recommend-item-location">
                {concert[1].FCLTYNM}
              </div>
              <div className="recommend-item-date">
                {concert[1].PRFPDFROM} ~ {concert[1].PRFPDTO}
              </div>
              <div className="recommend-item-actor">{concert[1].PRFCAST}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
