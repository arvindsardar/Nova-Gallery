import React from 'react';
import NovaGallery from './components/novaGallery';

const galleryData = [
	{
		img: "https://via.placeholder.com/150"
	},
	{
		img: "https://via.placeholder.com/150"
	},
	{
		img: "https://via.placeholder.com/150"
	},
	{
		img: "https://via.placeholder.com/150"
	},
	{
		img: "https://via.placeholder.com/150"
	},
	{
		img: "https://via.placeholder.com/150"
	},
	{
		img: "https://via.placeholder.com/150"
	},
]

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					Nova Gallery
				</h1>
			</header>
			<NovaGallery />
			<br />
		</div>
	);
}

export default App;
