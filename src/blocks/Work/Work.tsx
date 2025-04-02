import {LayeredHeader} from "../../components/LayeredHeader/LayeredHeader.tsx";
import {Card} from "./Card/Card.tsx";
import classes from "./Work.module.css";

export const Work = () => {
	return (
		<div className={classes.container}>
			<LayeredHeader placeholder={"WORK"}>How It Works</LayeredHeader>
			<div className={classes.cardContainer}>
				<Card header={"Pick meals"}>
					Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.
				</Card>
				<Card header={"Choose how often"}>
					Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!
				</Card>
				<Card header={"Fast deliveries"}>
					Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.
				</Card>
				<Card header={"Tasty meals"}>
					Gobble makes cooking fast, so you have more time to unwind and be with family.
				</Card>
			</div>
		</div>
	)
}