import {LayeredHeader} from "../../components/LayeredHeader/LayeredHeader.tsx";
import classes from "./Dishes.module.css";
import {SDish} from "../../api/schemas/SDish.ts";
import {useEffect, useState} from "react";
import {getDishes} from "../../api/routers.ts";
import {Card} from "./Card/Card.tsx";

export const Dishes = () => {
	const [dishes, setDishes] = useState<SDish[]>([]);

	const onLoad = () => {
		setDishes(getDishes());
	}

	useEffect(() => {
		onLoad();
	}, [])

	return (
		<div className={classes.container}>
			<LayeredHeader placeholder={"DISHES"}>Dish Of The Day</LayeredHeader>
			<div className={classes.cardContainer}>
				{dishes.map((d, index) => (
					<Card dish={d} key={index + d.name}/>
				))}
			</div>
		</div>
	)
}