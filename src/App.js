import React from "react";
import initial from "./data/initial";
import reducer from "./data/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer, initial);

const App = () => (
	<Provider store={store}>
		<p>App</p>
	</Provider>
);

export default App;
