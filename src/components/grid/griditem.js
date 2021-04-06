/** @format */
// Global
import React from "react";

const GridItem = ({ artPiece, handleDrag, handleDrop }) => {
	const rotateStyle = { transform: "rotate(" + artPiece.rotate + "turn)" };
	return (
		<div
			className="item"
			draggable={true}
			id={artPiece.id}
			onDragOver={(e) => e.preventDefault()}
			onDragStart={handleDrag}
			onDrop={handleDrop}
		>
			<img src={artPiece.url} alt={artPiece.title} className="image" style={rotateStyle} />
		</div>
	);
};
export default GridItem;
