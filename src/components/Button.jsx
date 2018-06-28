import React from "react";

const Button = ({ title, classStyle }) => (
	<button className={classStyle}>{title}</button>
);
Button.defaultProps = {
	classStyle: "btn btn-primary",
};
export default Button;
