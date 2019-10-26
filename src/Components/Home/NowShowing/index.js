import React from 'react';
import title from './title.png';
import './NowShowing.css';

class NowShowing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <img className={'component-title'} src={title} alt={title} />
      </>
    )
  }
}

export default NowShowing;
