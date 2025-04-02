import {Header} from "../../blocks/Header/Header.tsx";
import classes from "./Main.module.css"
import {Main} from "../../blocks/Main/Main.tsx";
import {About} from "../../blocks/About/About.tsx";
import {Work} from "../../blocks/Work/Work.tsx";
import {Dishes} from "../../blocks/Dishes/Dishes.tsx";
import {Chefs} from "../../blocks/Chefs/Chefs.tsx";

export const PMain = () => {
	return (
		<>
			<img src="/images/bg-image.png" alt="image" className={classes.backgroundImage}/>
			<Header/>
			<div className={classes.main}>
				<Main/>
			</div>
			<div className={classes.content}>
				<About/>
				<Work/>
				<Dishes/>
				<Chefs/>
			</div>
		</>
	)
}