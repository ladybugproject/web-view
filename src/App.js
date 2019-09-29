import React from "react";
import "./App.css";
import Navigator from "./navigator/Navigator";
import Recommend from "./recommend/Recommend";
import SearchBar from "./searchBar/SearchBar";
import Information from "./information/Information";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigator />
        <Route exact path="/" Component={App}>
          <SearchBar />
          <Recommend />
        </Route>

        <Route path="/information" Component={App}>
          <SearchBar />
          <Information />
        </Route>
      </Router>
    )
  }
}

export default App;
