import React from 'react';
import Dot from 'react-carousel-dots';
import TouchScrollTracker from './touchScrollTracker';
import RecommendationItem from './recommendationItem';
import title from './recomendation-title.png';
import './Recommendation.css';

class Recommendation extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      itemIndex: 0,
      recommendations: [
        {
          prf_name: '판타스틱',
          poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121653_180607_112000.jpg',
          plc_name: 'NH아트홀 판타스틱 전용관 (NH아트홀 판타스틱 전용관)',
          date_from: '2009-04-25',
          date_to: '2019-09-30',
          cast: '백승우, 양대용, 문진태, 김태연, 손힘찬, 박현수, 어하연 등',
        },
        {
          prf_name: '빨래',
          poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121661_170517_143018.gif',
          plc_name: '동양예술극장(구. 아트센터K) (1관(네모극장))',
          date_from: '2014-09-26',
          date_to: '2019-01-06',
          cast: '하은설, 김주연, 조상웅, 노희찬, 장이주, 조민정, 이세령 등',
        },
        {
          prf_name: '판타스틱',
          poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121653_180607_112000.jpg',
          plc_name: 'NH아트홀 판타스틱 전용관 (NH아트홀 판타스틱 전용관)',
          date_from: '2009-04-25',
          date_to: '2019-09-30',
          cast: '백승우, 양대용, 문진태, 김태연, 손힘찬, 박현수, 어하연 등',
        },
      ],
    };
    this.touchScrollTracker = new TouchScrollTracker({
      component: this,
      onScroll: this.scroll,
    });
  }

  scroll = (direction) => {
    const nextItemIndex = this.state.itemIndex + direction;

    if (nextItemIndex < 0 || nextItemIndex >= this.state.recommendations.length) {
      return;
    }

    this.scrollItem(nextItemIndex);
    this.syncDotNavigation(nextItemIndex);
  };

  scrollItem(nextItemIndex) {
    const scrollToX = nextItemIndex * this.element.clientWidth;

    this.element.scrollTo({
      left: scrollToX,
      behavior: 'smooth',
    });
  }

  syncDotNavigation(nextItemIndex) {
    this.setState({
      itemIndex: nextItemIndex,
    });
  }

  render() {
    const {
      recommendations,
      itemIndex,
    } = this.state;

    return (
      <div className={'recommendation'}>
        <img className={'component-title'} src={title} alt={title} />
        <div className={'recommendation-item-wrapper'}
             ref={(element) => {this.element = element;}}
             onTouchStart={this.touchScrollTracker.touchStart.bind(this.touchScrollTracker)}
             onTouchEnd={this.touchScrollTracker.touchEnd.bind(this.touchScrollTracker)}
        >
          {recommendations.map((r, index) => {
              return (
                <RecommendationItem recommendation={r} key={index} />
              );
            })
          }
        </div>

        <div className={'dot-nav-wrapper'}>
          <Dot className={'dot-nav'} active={itemIndex} length={recommendations.length} />
        </div>

      </div>
    );
  }
}

export default Recommendation;
