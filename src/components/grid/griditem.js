/** @format */
// Global
import React, { createRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const GridItem = ({ artPiece, swapArt }) => {
	const ref = createRef();

	const [{ isDragging }, connectDrag] = useDrag({
		type: "IMG",
		item: { artPiece },
		collect: (monitor) => {
			return {
				isDragging: monitor.isDragging(),
			};
		},
	});

	const [, connectDrop] = useDrop({
		accept: "IMG",
		hover(moving) {
			console.log("moving: ", moving.artPiece.id);

			if (moving.artPiece.id !== artPiece.id) {
				swapArt(moving.artPiece.id, artPiece.id);
			}
		},
	});

	connectDrag(ref);
	connectDrop(ref);

	return (
		<div className="item" ref={ref}>
			<img src={artPiece.url} alt={artPiece.title} className="image" />
		</div>
	);
};
export default GridItem;
