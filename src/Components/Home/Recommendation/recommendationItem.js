import React from 'react';
import { Link } from 'react-router-dom';
import './Recommendation.css';

class RecommendationItem extends React.Component {

  constructor(prop) {
    super(prop);
  }

  render() {
    const { recommendation } = this.props;
    const {
      poster,
      prf_id,
      prf_name,
      plc_name,
      date_from,
      date_to,
      cast,
    } = recommendation;

    return (
      <div className={'recommendation-item'}>
        <Link to={`/detail/${prf_id}`}>
          <img className={'poster'} src={poster} alt={''}/>
        </Link>
        <div className={'descriptions'}>
          <div className={'description prf-name'}>
            {prf_name}
          </div>
          <div className={'description'}>
            <span className={'content-key'}>장소</span>
            <span>{plc_name}</span>
          </div>
          <div className={'description'}>
            <span className={'content-key'}>날짜</span>
            <span>{date_from} ~ {date_to}</span>
          </div>
          <div className={'description'}>
            <span className={'content-key'}>출연진</span>
            <span>{cast}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendationItem;
