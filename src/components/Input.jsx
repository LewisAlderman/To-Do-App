import React, { Component } from "react";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputted: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			inputted: e.target.value,
		});
	}

	render() {
		return (
			<input
				className="form-control"
				type="text"
				onChange={this.handleChange}
			/>
		);
	}
}

export default Input;
