import React, { useState } from 'react';
import Content from '../GalleryData.json';
import './styles.css';

const Gallery = () => {
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
					Content && Content.map((item) => {
						const tags = item.tag;
						return(
							<div
								className='single'
								key={item.id}
								onClick={ () => handleOpenModal(item.id) }
							>
								<img src={item.img} alt='' />
								<p>Tags:
									{tags.map(tag => (
										<span key={tag}>({tag}) </span>
									))}
								</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Gallery