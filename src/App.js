import NovaGallery from './components/novaGallery';
import NovaGalleryModule from './components/novaGalleryModule';

const galleryData = [
	{
		img: "https://picsum.photos/800"
	},
	{
		img: "https://picsum.photos/801"
	},
	{
		img: "https://picsum.photos/802"
	},
	{
		img: "https://picsum.photos/803"
	},
	{
		img: "https://picsum.photos/804"
	},
	{
		img: "https://picsum.photos/805"
	},
	{
		img: "https://picsum.photos/806"
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
			<NovaGallery
				galleryData = {galleryData}
			/>
			<br />
			<NovaGalleryModule />
		</div>
	);
}

export default App;
