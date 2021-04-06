/** @format */

// Global
import React, { useState } from "react";

// Local
import "./grid.css";
import GridItem from "./griditem";

const ArtGrid = ({ artArray }) => {
	const [artArranged, setArtArranged] = useState(artArray);

	const swapArt = (dragID, hoverID) => {
		const dragIndex = artArranged.findIndex((artPiece) => artPiece.id === dragID);
		console.log("drag: ", dragIndex);
		const hoverIndex = artArranged.findIndex((artPiece) => artPiece.id === hoverID);
		console.log("hover: ", hoverIndex);
		if (dragIndex === -1 || hoverIndex === -1) {
			return;
		}
		const a = artArranged;
		[a[dragIndex], a[hoverIndex]] = [a[hoverIndex], a[dragIndex]];
		console.log("a: ", a);
		setArtArranged(a);
	};

	return (
		<div className="grid">
			{artArranged.map((artPiece) => (
				<GridItem key={artPiece.id} artPiece={artPiece} swapArt={swapArt} />
			))}
		</div>
	);
};
export default ArtGrid;
