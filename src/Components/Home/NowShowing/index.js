import React from 'react';
import { Link } from 'react-router-dom';
import title from './title.png';
import './NowShowing.css';
import APIClient from '../../APIClient';

class NowShowing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: [],
    };
  }

  async componentDidMount() {
    const playing = await APIClient.playing.now();

    this.setState({
      playing,
    });
  }

  render() {
    const { playing } = this.state;

    return (
      <div className={'now-showing'}>
        <img className={'component-title'} src={title} alt={title} />
        <div className={'showing-poster-wrapper'}>
          {playing.map((p, index) => {
            return (
              <Link to={`/detail/${p.prf_id}`} key={index}>
                <img className={'showing-poster'} src={p.poster} alt={p.poster} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NowShowing;
