import React from "react";

const ListItem = ({ item, onChange, onClick }) => (
	<li className="list-group-item">
		<input type="checkbox" onChange={onChange} />
		{item.task}
		{/* <button onPress={onPress}>edit</button> */}
		<button onClick={onClick}>delete</button>
	</li>
);
export default ListItem;
