import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from './Components/Home';
import Detail from './Components/Detail';
import GlobalStyles from './GlobalStyles';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:prf_id" component={Detail} />
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
