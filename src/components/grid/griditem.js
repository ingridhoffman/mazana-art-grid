/** @format */
// Global
import React, { createRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const GridItem = ({ artPiece, swapArt }) => {
	const ref = createRef();

	const [{ isDragging }, connectDrag] = useDrag({
		type: "IMG",
		item: { id: artPiece.id, content: artPiece },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	const [{ isOver }, connectDrop] = useDrop({
		accept: "IMG",
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),

		drop(moving) {
			console.log("moving: ", moving.id);

			if (moving.id !== artPiece.id) {
				swapArt(moving.id, artPiece.id);
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
