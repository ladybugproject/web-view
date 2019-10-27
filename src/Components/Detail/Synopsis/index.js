import React from 'react';
import './style.css';

class Synopsis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { synopsis } = this.props.result;

    return (
      <div className={'synopsis'}>
        <div className={'component-title'}>
          시놉시스
        </div>
        <div className={'component-content'}>
          {synopsis}
        </div>
      </div>
    );
  }
}

export default Synopsis;
