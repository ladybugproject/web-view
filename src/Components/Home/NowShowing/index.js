import React from 'react';
import title from './title.png';
import './NowShowing.css';

class NowShowing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: [
        {
          poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121653_180607_112000.jpg',
        },
        {
          poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121661_170517_143018.gif',
        },
        {
          poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121682_190624_145235.png',
        },
        {
          poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121749_160202_133331.jpg',
        },
        {
          poster: 'http://www.kopis.or.kr/upload/pfmPoster/PF_PF121839_160105_144248.gif',
        },
      ],
    };
  }

  render() {
    const { playing } = this.state;

    return (
      <div className={'now-showing'}>
        <img className={'component-title'} src={title} alt={title} />
        <div className={'showing-poster-wrapper'}>
          {playing.map((p, index) => {
            return <img className={'showing-poster'} src={p.poster} alt={p.poster} />;
          })}
        </div>
      </div>
    );
  }
}

export default NowShowing;
