import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import DetailSearch from "./Components/DetailSearch";
import GlobalStyles from "./GlobalStyles";

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Route exact path="/" component={Home} />
					<Route path="/detail" component={DetailSearch} />
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
		);
	}
}

export default App;
