/** @format */
// Global
import React from "react";

// !! need to implement useMemo to eliminate rerendering of items not changing

const GridItem = ({ artPiece, handleDrag, handleDrop, handleClick, inGrid }) => {
	// transform style to set display orientation of artwork
	const rotateStyle = { transform: "rotate(" + artPiece.rotate + "deg)" };

	return (
		<div
			className={inGrid ? "grid-item" : "extra-item"}
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
