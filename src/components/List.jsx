import React from "react";
import ListItem from "./ListItem";
import Input from "../components/Input";
import Button from "../components/Button";

const List = ({ listItems }) => {
	return (
		<React.Fragment>
			<div className="input-group">
				<Input />
				<div className="input-group-append">
					<Button title="Add" />
				</div>
			</div>
			{!listItems.length ? (
				<p>No Items Found</p>
			) : (
				<ul class="list-group">
					{listItems.map((item, i) => <ListItem key={i} listItem={item} />)}
				</ul>
			)}
		</React.Fragment>
	);
};

export default List;
