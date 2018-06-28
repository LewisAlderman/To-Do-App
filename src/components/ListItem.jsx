import React, { Component } from "react";

const ListItem = ({ item, onChange }) => (
	<li className="list-group-item">
		<input type="checkbox" onChange={onChange} />
		{item.task}
		<button>edit</button>
		<button>delete</button>
	</li>
);
export default ListItem;
