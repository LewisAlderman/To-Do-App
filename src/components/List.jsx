import React, { Component } from "react";
import ListItem from "./ListItem";

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
					completed: false,
				},
				{
					id: 3,
					task: "buy biscuits",
					completed: false,
				},
				{
					id: 4,
					task: "wash car",
					completed: false,
				},
			],
			listItem: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
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

	handleCheck(index) {
		let { toDoArray } = this.state;
		toDoArray[index].completed = !toDoArray[index].completed;
		let newArr = toDoArray;

		this.setState({
			toDoArray: newArr,
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
					<ul className="list-group">
						{this.state.toDoArray.map((item, index) => (
							<ListItem
								key={index}
								item={item}
								onChange={() => this.handleCheck(index)}
							/>
						))}
					</ul>
				)}
			</React.Fragment>
		);
	}
}
export default List;
