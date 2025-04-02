import {LayeredHeader} from "../../components/LayeredHeader/LayeredHeader.tsx";
import classes from "./Chefs.module.css";
import {SChef} from "../../api/schemas/SChef.ts";
import {useEffect, useState} from "react";
import {getChefs} from "../../api/routers.ts";
import {Card} from "./Card/Card.tsx";

export const Chefs = () => {
	const [chefs, setChefs] = useState<SChef[]>([]);

	const onLoad = () => {
		setChefs(getChefs());
	}

	useEffect(() => {
		onLoad();
	}, [])

	return (
		<div className={classes.container}>
			<LayeredHeader placeholder={"SHEFS"}>This Month's Chefs</LayeredHeader>
			<div className={classes.cardContainer}>
				{chefs.map((c, index) => (
					<Card chef={c} key={index + c.name}/>
				))}
			</div>
		</div>
	)
}