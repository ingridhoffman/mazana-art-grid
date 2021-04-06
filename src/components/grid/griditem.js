/** @format */
// Global
import React, { createRef } from "react";

const GridItem = ({ artPiece, swapArt }) => {
	return (
		<div className="item">
			<img src={artPiece.url} alt={artPiece.title} className="image" />
		</div>
	);
};
export default GridItem;
