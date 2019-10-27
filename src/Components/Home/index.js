import React from "react";
import Navigator from "../Navigator";
import Recommendation from './Recommendation';
import NowShowing from './NowShowing';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navigator />
        <Recommendation />
        <NowShowing />
      </>
    );
  }
}

export default Home;
