import React from "react";
import "./App.css";
import Navigator from "./navigator/Navigator";
import Recommend from "./recommend/Recommend";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Recommend />
      </div>
    );
  }
}

export default App;
