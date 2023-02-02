import { useState } from 'react';
import './novaGallery.css';



const NovaGallery = ({galleryData}) => {
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
		? setSlideNumber( galleryData.length -1 )
		: setSlideNumber( slideNumber - 1 )
	}

	// Next Image
	const nextSlide = () => {
		slideNumber + 1 === galleryData.length
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
				<div className='fullScreenImage'>
					<img src={galleryData[slideNumber].img} alt='' />
				</div>
				</div>
			}

			<div className="galleryWrap">
				{
					galleryData && galleryData.map((slide, index) => {
						return(
							<div
								className='single'
								key={index}
								onClick={ () => handleOpenModal(index) }
							>
								<img src={slide.img} alt='' />
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default NovaGallery