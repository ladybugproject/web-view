import React from 'react';
import Setup from './setup.svg';
import Logo from './logo.png';
import Settings from './settings.svg';
import './Navigator.css';

class Navigator extends React.Component {
  render() {
    return (
      <div className='navigator'>
        <img className={'navigator-menu-icon left'} src={Setup}  alt={Setup} />
        <img className={'center'} src={Logo}  alt={Logo} />
        <img className={'navigator-menu-icon right'} src={Settings}  alt={Setup} />
      </div>
    );
  }
}

export default Navigator;
