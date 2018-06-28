import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header title="To-Do List" />
				<List />
			</React.Fragment>
		);
	}
}

export default App;
