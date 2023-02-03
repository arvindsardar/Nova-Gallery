import React, { useState } from 'react';
import Content from '../GalleryData.json';
import './novaGallery.css';

const NovaGallery = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = (index) => {
		setSlideNumber(index)
		setOpenModal(true)
	}

	// Close Modal
	const handleCloseModal = () => {
		setOpenModal(false)
	}

	// Previous Image
	const prevSlide = () => {
		slideNumber === 0
		? setSlideNumber( Content.length -1 )
		: setSlideNumber( slideNumber - 1 )
	}

	// Next Image
	const nextSlide = () => {
		slideNumber + 1 === Content.length
		? setSlideNumber(0)
		: setSlideNumber(slideNumber + 1)
	}


	return (
		<div>

			{openModal &&
				<div className='sliderWrap'>
				<a className='btnClose' onClick={handleCloseModal}>x</a>
				<a className='btnPrev' onClick={prevSlide}>«</a>
				<a className='btnNext' onClick={nextSlide}>»</a>
				<div className='fullScreenImage' onClick={handleCloseModal}>
					<img src={Content[slideNumber].img} alt='' />
				</div>
				</div>
			}

			<div className="galleryWrap">
				{
					Content && Content.map((slide, index) => {
						return(
							<div
								className='single'
								key={index}
								onClick={ () => handleOpenModal(index) }
							>
								<img src={slide.img} alt='' />
								<p>{Content.length}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default NovaGallery