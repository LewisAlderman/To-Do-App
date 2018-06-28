import React from "react";
import initial from "./data/initial";
import reducer from "./data/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import List from "./containers/List";

const store = createStore(reducer, initial);

const App = () => (
	<Provider store={store}>
		<React.Fragment>
			<List />
		</React.Fragment>
	</Provider>
);

export default App;
