import React from 'react';
import NovaGallery from './components/gallery';
import Nav from './components/nav';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className='centertxt'>
					Nova Gallery
				</h1>
			</header>

			<Nav />
			<NovaGallery />

		</div>
	);
}

export default App;
