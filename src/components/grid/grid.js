/** @format */

// Global
import React, { useEffect, useState } from "react";

// Local
import "./grid.css";
import GridItem from "./griditem";

const ArtGrid = ({ artArray }) => {
	const [artArranged, setArtArranged] = useState(artArray);

	useEffect(() => {
		console.log("arranged: ", artArranged);
	}, [artArranged]);

	const swapArt = (dragID, hoverID) => {
		const dragIndex = artArranged.findIndex((artPiece) => artPiece.id === dragID);
		console.log("drag: ", dragIndex);
		const hoverIndex = artArranged.findIndex((artPiece) => artPiece.id === hoverID);
		console.log("hover: ", hoverIndex);
		if (dragIndex === -1 || hoverIndex === -1) {
			return;
		}
		setArtArranged((artArranged) => {
			let temp = [...artArranged];
			[temp[dragIndex], temp[hoverIndex]] = [temp[hoverIndex], temp[dragIndex]];
			return temp;
		});
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
