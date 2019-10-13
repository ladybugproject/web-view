import React from "react";
import Navigator from "../Navigator";
import Recommendation from '../Recommendation';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navigator />
        <Recommendation />
      </>
    );
  }
}

export default Home;
