/** @format */

// Local
import "./App.css";
import { artwork } from "./assets/artwork";
import ArtGrid from "./components/Grid/grid";

function App() {
	return (
		<div className="container">
			<ArtGrid artArray={artwork} />
		</div>
	);
}

export default App;
