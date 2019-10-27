import React from 'react';
import Dot from 'react-carousel-dots';
import TouchScrollTracker from './touchScrollTracker';
import RecommendationItem from './recommendationItem';
import title from './recomendation-title.png';
import './Recommendation.css';
import APIClient from '../../APIClient';

class Recommendation extends React.Component {
  constructor(prop) {
    super(prop);



    this.state = {
      itemIndex: 0,
      recommendations: [],
    };

    this.touchScrollTracker = new TouchScrollTracker({
      component: this,
      onScroll: this.scroll,
    });
  }

  async componentDidMount() {
    const recommendations = await APIClient.playing.recommendation();

    this.setState({
      recommendations
    })
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
