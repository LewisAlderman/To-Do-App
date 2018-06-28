import React, { Component } from "react";

class ListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { listItem } = this.props;
		return (
			<li className="list-group-item">
				<input type="checkbox" />
				{listItem.task}
				<div className="float-right">
					<button className="btn btn-info">Edit</button>
					<button className="btn btn-danger">Delete</button>
				</div>
			</li>
		);
	}
}

export default ListItem;
