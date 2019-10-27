import React from 'react';
import Dot from 'react-carousel-dots';
import './Recommendation.css';

class TouchScrollTracker {

  static SCROLL_TO_LEFT = -1;
  static NO_SCROLL = 0;
  static SCROLL_TO_RIGHT = 1;

  constructor(target) {
    this.fromX = 0;
    this.target = target;
  }

  touchStart(e) {
    this.fromX = e.changedTouches[0].clientX;
  }

  touchEnd(e) {
    const toX = e.changedTouches[0].clientX;
    const delta = toX - this.fromX;
    const direction = this.getDirection(delta);

    if (direction === TouchScrollTracker.NO_SCROLL) {
      return;
    }

    this.target.scroll.call(this, direction);
  }

  getDirection = delta => {
    const absDelta = Math.abs(delta);

    if (absDelta === 0) {
      return TouchScrollTracker.NO_SCROLL;
    }

    return delta > 0
      ? TouchScrollTracker.SCROLL_TO_LEFT
      : TouchScrollTracker.SCROLL_TO_RIGHT;
  };
}

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
    this.touchScrollTracker = new TouchScrollTracker(this);
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
    return (
      <div className={'recommendation'}>
        <p className={'component-title'}>오머나 이건 꼭 봐야해!</p>
        <div className={'recommendation-item-wrapper'}
             ref={(element) => {this.element = element;}}
             onTouchStart={this.touchScrollTracker.touchStart.bind(this.touchScrollTracker)}
             onTouchEnd={this.touchScrollTracker.touchEnd.bind(this.touchScrollTracker)}
        >

          <div className={'recommendation-item'}>
            <img className={'poster'} src={this.state.recommendations[0].poster} alt={''}/>
            <div className={'descriptions'}>
              <div className={'description prf-name'}>
                {this.state.recommendations[0].prf_name}
              </div>
              <div className={'description'}>
                <span className={'content-key'}>장소</span>
                <span>
                  {this.state.recommendations[0].plc_name}
                </span>
              </div>
              <div className={'description'}>
                <span className={'content-key'}>날짜</span>
                <span>
                  {this.state.recommendations[0].date_from} ~ {this.state.recommendations[0].date_to}
                </span>
              </div>
              <div className={'description'}>
                <span className={'content-key'}>출연진</span>
                <span>
                  {this.state.recommendations[0].cast}
                </span>
              </div>
            </div>
          </div>

          <div className={'recommendation-item'}>
            <img className={'poster'} src={this.state.recommendations[1].poster} alt={''}/>
            <div className={'descriptions'}>
              <div className={'description prf-name'}>
                {this.state.recommendations[1].prf_name}
              </div>
              <div className={'description'}>
                <span className={'content-key'}>장소</span>
                <span>
                  {this.state.recommendations[1].plc_name}
                </span>
              </div>
              <div className={'description'}>
                <span className={'content-key'}>날짜</span>
                <span>
                  {this.state.recommendations[1].date_from} ~ {this.state.recommendations[1].date_to}
                </span>
              </div>
              <div className={'description'}>
                <span className={'content-key'}>출연진</span>
                <span>
                  {this.state.recommendations[1].cast}
                </span>
              </div>
            </div>
          </div>

          <div className={'recommendation-item'}>
            <img className={'poster'} src={this.state.recommendations[0].poster} alt={''}/>
            <div className={'descriptions'}>
              <div className={'description prf-name'}>
                {this.state.recommendations[2].prf_name}
              </div>
              <div className={'description'}>
                <span className={'content-key'}>장소</span>
                <span>
                  {this.state.recommendations[2].plc_name}
                </span>
              </div>
              <div className={'description'}>
                <span className={'content-key'}>날짜</span>
                <span>
                  {this.state.recommendations[2].date_from} ~ {this.state.recommendations[0].date_to}
                </span>
              </div>
              <div className={'description'}>
                <span className={'content-key'}>출연진</span>
                <span>
                  {this.state.recommendations[2].cast}
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className={'dot-nav-wrapper'}>
          <Dot className={'dot-nav'} active={this.state.itemIndex} length={this.state.recommendations.length} />
        </div>

      </div>
    );
  }
}

export default Recommendation;