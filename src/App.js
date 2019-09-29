import React from "react";
import "./App.css";
import Navigator from "./navigator/Navigator";
import Recommend from "./recommend/Recommend";
import SearchBar from "./searchBar/SearchBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" Component={App}>
          <Navigator />
          <SearchBar />
          <Recommend />
        </Route>
      </Router>
    )
  }
}

export default App;
