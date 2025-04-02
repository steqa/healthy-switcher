import {FC, useEffect} from "react";
import classes from "./Rating.module.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import EmptyStarSvg from "../../icons/star-empty.svg?react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MiddleStarSvg from "../../icons/star-middle.svg?react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import FullStarSvg from "../../icons/star-full.svg?react";

interface RatingProps {
	value: number;
	starCount: number;
	dimmed?: boolean;
}

export const Rating: FC<RatingProps> = (
	{
		value,
		starCount,
		dimmed = false,
	}
) => {
	const getStars = (): Array<number> => {
		const stars: Array<number> = []
		const middleFrom = 0.2
		const fullFrom = 0.8

		for (let i = 0; i < starCount; i++) {
			if (value >= fullFrom) {
				stars.push(1)
			} else if (value >= middleFrom) {
				stars.push(0.5)
			} else {
				stars.push(0)
			}
			value -= 1
		}
		return stars
	}

	const getClasses = () => {
		const classList = [classes.star]
		if (dimmed) classList.push(classes.dimmed)
		return classList.join(" ")
	}

	useEffect(() => {
		console.log(dimmed)
	}, [dimmed])

	return (
		<div className={classes.container}>
			{getStars().map((star, index) => {
				if (star === 1) {
					return <FullStarSvg key={index} className={getClasses()}/>
				}
				if (star === 0.5) {
					return <MiddleStarSvg key={index} className={getClasses()}/>
				}
				return <EmptyStarSvg key={index} className={getClasses()}/>
			})}
		</div>
	)
}