import {FC, useState} from "react";
import classes from "./Card.module.css";
import {SDish} from "../../../api/schemas/SDish.ts";
import {Button} from "../../../components/Button/Button.tsx";
import {Rating} from "../../../components/Rating/Rating.tsx";

interface CardProps {
	dish: SDish,
}

export const Card: FC<CardProps> = (
	{
		dish,
	}
) => {
	const [isHover, setIsHover] = useState<boolean>(false);

	const handleMouseEnter = () => setIsHover(true);
	const handleMouseLeave = () => setIsHover(false);

	return (
		<div
			className={classes.card}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img src={dish.image} alt={dish.name} className={classes.image}/>
			<div className={classes.content}>
				<p className={classes.header}>{dish.name}</p>
				<p className={classes.serving}>{dish.serving}</p>
				<p className={classes.description}>{dish.description}</p>
			</div>
			<div className={classes.footer}>
				<div className={classes.rating}>
					<Rating value={dish.rate} starCount={5} dimmed={!isHover}/>
					<span>{dish.reviews}</span>
				</div>
				<Button outline>ORDER</Button>
			</div>
		</div>
	)
}
