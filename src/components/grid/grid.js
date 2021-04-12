/** @format */

// Global
import React, { useEffect, useState } from "react";

// Local
import "./grid.css";
import GridItem from "./griditem";

const ArtGrid = ({ artArray }) => {
	// organized array of artwork
	const [artArranged, setArtArranged] = useState(artArray);

	// current grid size
	// !! using state so this can eventually be dynamically changed by user
	// !! future gridSize object will include x=number of pieces in each row, y=number of rows, total=method that calculate total number of pieces in grid
	const [gridSize, setGridSize] = useState({ x: 3, y: 2, total: 6 });

	useEffect(() => {
		console.log("arranged: ", artArranged);
	}, [artArranged]);

	// art being moved
	const [moveID, setMoveID] = useState();
	// !! set up all these functions as methods on an art object so they get passed with the artpiece instead of each being passed individually
	// keep track of art being moved
	const handleDrag = (e) => {
		setMoveID(e.currentTarget.id);
	};

	// swap art being moved with art in target box
	const handleDrop = (e) => {
		const dragIndex = artArranged.findIndex((artPiece) => artPiece.id === moveID);
		console.log("drag: ", dragIndex);
		const dropIndex = artArranged.findIndex((artPiece) => artPiece.id === e.currentTarget.id);
		console.log("drop: ", dropIndex);
		if (dragIndex === -1 || dropIndex === -1) {
			return;
		}
		setArtArranged((artArranged) => {
			let temp = [...artArranged];
			[temp[dragIndex], temp[dropIndex]] = [temp[dropIndex], temp[dragIndex]];
			return temp;
		});
	};

	// rotate art 90' clockwise by clicking
	const handleClick = (e) => {
		e.preventDefault();
		const rotateIndex = artArranged.findIndex((artPiece) => artPiece.id === e.currentTarget.id);
		const newRotation = (artArranged[rotateIndex].rotate += 90);
		setArtArranged((artArranged) => {
			let temp = [...artArranged];
			temp[rotateIndex].rotate = newRotation;
			console.log("rotation: ", temp[rotateIndex].rotate);
			console.log("temp: ", temp);
			return temp;
		});
	};

	return (
		<>
			<div className="grid">
				{artArranged.slice(0, [gridSize.total]).map((artPiece) => (
					<GridItem
						key={artPiece.id}
						artPiece={artPiece}
						handleDrag={handleDrag}
						handleDrop={handleDrop}
						handleClick={handleClick}
						inGrid
					/>
				))}
			</div>
			<div className="extra">
				{artArranged.slice([gridSize.total]).map((artPiece) => (
					<GridItem
						key={artPiece.id}
						artPiece={artPiece}
						handleDrag={handleDrag}
						handleDrop={handleDrop}
						handleClick={handleClick}
					/>
				))}
			</div>
		</>
	);
};
export default ArtGrid;
