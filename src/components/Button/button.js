/** @format */

// Global
import React from "react";

// Local
import "./button.css";

// Standard button
export const Button = ({ label, action }) => {
	return (
		<button className="btn" onClick={action}>
			{label}
		</button>
	);
};
