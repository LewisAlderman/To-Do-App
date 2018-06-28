import React, { Component } from "react";

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDoArray: [
				{
					id: 1,
					task: "finish to do app",
					completed: false,
				},
				{
					id: 2,
					task: "edited task",
					completed: true,
				},
				{
					id: 3,
					task: "buy biscuits",
					completed: false,
				},
				{
					id: 4,
					task: "wash car",
					completed: true,
				},
			],
			listItem: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({ listItem: e.target.value });
	}

	handleClick() {
		let { toDoArray } = this.state;
		const input = document.getElementById("inputfield");
		input.value = "";
		this.setState({
			toDoArray: [
				...toDoArray,
				{
					id: 5,
					task: this.state.listItem,
					completed: false,
				},
			],
			listItem: input.value,
		});
	}

	render() {
		const { toDoArray } = this.state;
		return (
			<React.Fragment>
				<p>Add a task</p>
				<input id="inputfield" onChange={this.handleChange} type="text" />
				<button onClick={this.handleClick}>Add</button>
				{!toDoArray.length ? (
					<p>Not items here</p>
				) : (
					<ul>
						{" "}
						{this.state.toDoArray.map((item, index) => (
							<li key={index}> {item.task} </li>
						))}
					</ul>
				)}
			</React.Fragment>
		);
	}
}
export default List;
