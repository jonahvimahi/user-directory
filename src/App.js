import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
class App extends Component {


	render() {
		// console.log(data[this.state.index].name.first);
		return (
			<>
				<Header />
				<Body />
			</>
		);
	}
}
export default App;
