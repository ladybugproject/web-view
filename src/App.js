import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import DetailSearch from "./Components/DetailSearch";
import Detail from "./Components/Detail";
import GlobalStyles from "./GlobalStyles";
import Login from "./Components/Login";

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Route exact path="/" component={Login} />
					<Route path="/home" component={Home} />
					<Route path="/detailSearch" component={DetailSearch} />
					<Route path="/detail/:prf_id" component={Detail} />
				</Router>
				<GlobalStyles />
				{/*<Router>*/}
				{/*<Navigator />*/}
				{/*<Route exact path="/" Component={App}>*/}
				{/*<SearchBar />*/}
				{/*<Recommend />*/}
				{/*</Route>*/}
			</>
		);
	}
}

export default App;
