import Content from '../GalleryData.json';

function NovaGalleryModule() {
	return (
		<div className='galleryWrap'>
			{
				Content && Content.map( item => {
					return(
						<div key={item.id}>
							<img src={item.img} />
						</div>
					)
				})
			}
		</div>
	);
}

export default NovaGalleryModule