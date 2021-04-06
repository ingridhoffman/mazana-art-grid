/** @format */
// Global
import React from "react";

const GridItem = ({ artPiece, handleDrag, handleDrop, handleClick }) => {
	const rotateStyle = { transform: "rotate(" + artPiece.rotate + "deg)" };
	return (
		<div
			className="item"
			draggable={true}
			id={artPiece.id}
			onDragOver={(e) => e.preventDefault()}
			onDragStart={handleDrag}
			onDrop={handleDrop}
			onClick={handleClick}
		>
			<img src={artPiece.url} alt={artPiece.title} className="image" style={rotateStyle} />
		</div>
	);
};
export default GridItem;
