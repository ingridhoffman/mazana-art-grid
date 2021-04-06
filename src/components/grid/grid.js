/** @format */

// Global
import React from "react";

// Local
import "./grid.css";

const ArtGrid = ({ artArray }) => {
	return (
		<div className="grid">
			{artArray.map((artwork) => {
				return (
					<div className="item">
						<img src={artwork.url} alt={artwork.title} className="image" />
					</div>
				);
			})}
		</div>
	);
};
export default ArtGrid;
