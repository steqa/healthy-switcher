import {LayeredHeader} from "../../components/LayeredHeader/LayeredHeader.tsx";
import classes from "./About.module.css";
import {getDishesImages} from "../../api/routers.ts";
import {useEffect, useState} from "react";
import {SDishImage} from "../../api/schemas/SDishImage.ts";
import {ImageSlider} from "../../components/ImageSlider/ImageSlider.tsx";

export const About = () => {
	const [dishesImages, setDishesImages] = useState<SDishImage[]>([]);

	const onLoad = () => {
		setDishesImages(getDishesImages());
	}

	useEffect(() => {
		onLoad();
	}, [])

	return (
		<div className={classes.container}>
			<LayeredHeader placeholder={"ABOUT"} dimmed>The Basics Of Healthy Food</LayeredHeader>
			<p className={classes.text}>
				In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur <br/>
				voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
			</p>
			<ImageSlider>
				{dishesImages.map((d, index) => (
					<img src={d.image} alt={d.name} key={index + d.name}/>
				))}
			</ImageSlider>
		</div>
	)
}