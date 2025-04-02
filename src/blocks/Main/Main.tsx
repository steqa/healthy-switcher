import classes from "./Main.module.css"
import {Button} from "../../components/Button/Button.tsx";
import {Contacts} from "../../components/Contacts/Contacts.tsx";

export const Main = () => {
	return (
		<div className={classes.container}>
			<div className={classes.textContainer}>
				<h1 className={classes.title}>
					Your <strong>Favourite Food</strong><br/>
					Delivered <strong>Hot & Fresh</strong>
				</h1>
				<p className={classes.subtitle}>
					HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &<br/>
					marinating, so you can cook a fresh homemade dinner in just 15 minutes.
				</p>
			</div>
			<Button big>Order Now</Button>
			<Contacts/>
		</div>
	)
}