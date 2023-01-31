import { useState } from 'react';
import './novaGallery.css';


const NovaGallery = ({galleryData}) => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	return (
		<div>
			<div className="galleryWrap">
				{
					galleryData && galleryData.map((slide, index) => {
						return(
							<div className="single" key={index}>
								<img src={slide.img} alt="" />
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default NovaGallery