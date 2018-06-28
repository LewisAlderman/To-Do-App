import { connect } from "react-redux";
import List from "../components/List";

const mapStateToProps = (state, { task }) => {
	return {
		listItems: Object.values(state.tasks),
	};
};

export default connect(mapStateToProps)(List);
