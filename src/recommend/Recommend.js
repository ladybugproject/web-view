import React from "react";
import "./recommend.css";
import dummy_img from "../img/sample3.jpg";

class Recommend extends React.Component {
  render() {
    return (
      <div className="wrap-recommend">
        <div className="recommend-title">어머! 이건 꼭 봐야해!</div>
        <div className="recommend-slider">
          <div className="wrap-recommend-item">
            <img
              className="recommend-item-poster"
              src={dummy_img}
              alt="sample"
            />
            <div className="recommend-item-info">
              <div className="recommend-item-title">작업의 정석</div>
              <div className="recommend-item-content">줄거리</div>
              <div className="recommend-item-location">장소</div>
              <div className="recommend-item-date">날짜</div>
              <div className="recommend-item-actor">출연진</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
