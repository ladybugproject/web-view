import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navigator from "./navigator/Navigator";
// import Recommend from "./recommend/Recommend";
// import SearchBar from "./searchBar/SearchBar";
// import Information from "./information/Information";
import "./App.css";
import Home from './Components/Home';
import GlobalStyles from './GlobalStyles';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
        <GlobalStyles />
      {/*<Router>*/}
        {/*<Navigator />*/}
        {/*<Route exact path="/" Component={App}>*/}
          {/*<SearchBar />*/}
          {/*<Recommend />*/}
        {/*</Route>*/}

        {/*<Route path="/information" Component={App}>*/}
          {/*<SearchBar />*/}
          {/*<Information />*/}
        {/*</Route>*/}
        {/*</Router>*/}
      </>
    )
  }
}

export default App;
