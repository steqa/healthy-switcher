import {FC} from "react";
import classes from "./Card.module.css";
import {SChef} from "../../../api/schemas/SChef.ts";

interface CardProps {
	chef: SChef,
}

export const Card: FC<CardProps> = (
	{
		chef,
	}
) => {
	return (
		<div className={classes.card}>
			<div className={classes.chef}>
				<img src={chef.avatar} alt={chef.name} className={classes.avatar}/>
				<div className={classes.text}>
					<p className={classes.name}>{chef.name}</p>
					<p className={classes.position}>{chef.position}</p>
				</div>
			</div>
			<div className={classes.dishes}>
				<img src={chef.dish1} alt="dish 1" className={classes.dish}/>
				<img src={chef.dish2} alt="dish 2" className={classes.dishSquare}/>
				<img src={chef.dish3} alt="dish 3" className={classes.dishSquare}/>
			</div>
		</div>
	)
}
