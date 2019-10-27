import React from 'react';
import './style.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { result } = this.props;
    const {
      prf_name,
      genre,
      date_from,
      date_to,
      plc_name,
      cast,
      poster,
    } = result;

    return (
      <div className={'overview'}>
        <div className={'poster-wrapper'}>
          <img className={'poster'} src={poster} alt={poster} />
        </div>
        <div className={'text-wrapper'}>
          <div className={'prf-name'}>{prf_name}</div>
          <div className={'description'}>
            <span className={'content-key'}>장르</span>
            <span>{genre}</span>
          </div>
          <div className={'description'}>
            <span className={'content-key'}>날짜</span>
            <span>{date_from} ~ {date_to}</span>
          </div>
          <div className={'description'}>
            <span className={'content-key'}>장소</span>
            <span>{plc_name}</span>
          </div>
          <div className={'description'}>
            <span className={'content-key'}>출연진</span>
            <span>{cast}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Overview;
