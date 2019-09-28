import React from "react";
import "./Recommend.css";

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

  makeConcertElements(concert) {
    const concerts = Array.from(concert);
    concerts.shift(0);
    const concertElements = []
    for (const data of concerts) {
      const id = data.MT10ID;
      const url = data.POSTER;
      const title = data.PRFNM
      const location = data.FCLTYNM;
      const dateStart = data.PRFPDFROM;
      const dateFinish = data.PRFPDTO;
      const actor = data.PRFCAST;

      concertElements.push((
        <div className="wrap-recommend-item" key={id} >
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
    ));
    }
    return concertElements;
  }

  render() {
    const { concert } = this.state;
    if (concert.length === 0) return <div></div>;
    
    const concertElements = this.makeConcertElements(concert);

    return (
      <div className="wrap-recommend">
        <div className="recommend-title">어머! 이건 꼭 봐야해!</div>
        <div className="recommend-slider animate" >
          {concertElements}
        </div>
      </div>
    );
  }
}

export default Recommend;
