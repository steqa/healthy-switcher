import {FC, ReactNode, useState} from "react";
import classes from "./ImageSlider.module.css";

interface ImageSliderProps {
	children: ReactNode,
}

export const ImageSlider: FC<ImageSliderProps> = (
	{
		children,
	}
) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides = Array.isArray(children) ? children : [children];

	const nextSlide = () => {
		let newIndex = currentIndex + 2;
		if (newIndex > slides.length) {
			newIndex = 0;
		}
		setCurrentIndex(newIndex);
	}

	const prevSlide = () => {
		let newIndex = currentIndex - 2;
		if (newIndex < 0) {
			newIndex = slides.length % 2 == 0 ? slides.length - 2 : slides.length - 1;
		}
		setCurrentIndex(newIndex);
	}

	return (
		<div className={classes.container}>
			<img src="/icons/circle-arrow-left.svg" alt="left" className={classes.controlButton} onClick={prevSlide}/>

			<div className={classes.slider}>
				<div className={classes.slides} style={{transform: `translateX(-${currentIndex * 50}%)`}}>
					{slides.map((slide, index) => (
						<div key={index} className={classes.slide}>
							{slide}
						</div>
					))}
				</div>
			</div>

			<img src="/icons/circle-arrow-right.svg" alt="right" className={classes.controlButton} onClick={nextSlide}/>
		</div>
	);
}