import React from 'react';
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
            return <img className={'showing-poster'} key={index} src={p.poster} alt={p.poster} />;
          })}
        </div>
      </div>
    );
  }
}

export default NowShowing;
