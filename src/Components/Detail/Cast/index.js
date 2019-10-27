import React from 'react';
import './style.css';

class CastItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      profile,
      name,
    } = this.props.cast_profile;

    return (
      <div className={'cast-item'}>
        <img className={'profile'} src={profile} alt={profile} />
        <div className={'name'}>{name}</div>
      </div>
    )
  }
}

class Cast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cast_profile } = this.props.result;

    return (
      <div className={'cast'}>
        <div className={'component-title'}>
          대표 출연진
        </div>
        <div className={'cast-item-wrapper'}>
          {cast_profile.map((p, index) => {
            return <CastItem cast_profile={p} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cast;
