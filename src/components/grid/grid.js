/** @format */

// Global
import React, { useEffect, useState } from "react";

// Local
import "./grid.css";
import GridItem from "./griditem";
import { Button } from "../Button/button";

// Helper Functions
// Fisher-Yates Algorithm for random sorting an array
const randomSort = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	console.log("return array: ", array);
	return array;
};

// Component
const ArtGrid = ({ artArray }) => {
	// organized array of artwork
	const [artArranged, setArtArranged] = useState([]);

	// initialize artwork at page load
	useEffect(() => {
		setArtArranged(artArray);
	}, []);

	useEffect(() => {
		console.log("arranged: ", artArranged);
	}, [artArranged]);

	// current grid size
	// !! using state so this can eventually be dynamically changed by user
	// !! future gridSize object will include x=number of pieces in each row, y=number of rows, total=method that calculate total number of pieces in grid
	const [gridSize, setGridSize] = useState({ x: 3, y: 2, total: 6 });

	// art being moved
	const [moveID, setMoveID] = useState();
	// !! refactor - make all these functions methods on an art object so they get passed with the artpiece instead of each being passed individually
	// keep track of art being moved
	const handleDrag = (e) => {
		setMoveID(e.currentTarget.id);
	};

	// swap art being moved with art in target box
	const handleDrop = (e) => {
		const dragIndex = artArranged.findIndex((artPiece) => artPiece.id === moveID);
		const dropIndex = artArranged.findIndex((artPiece) => artPiece.id === e.currentTarget.id);
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
			return temp;
		});
	};

	// rearrange art - random sort
	const arrangeRandom = () => {
		let newOrder = randomSort(artArranged);
		setArtArranged([...newOrder]);
	};

	return (
		<>
			<div className="options">
				<Button label="Random Sort" action={arrangeRandom} />
			</div>
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
