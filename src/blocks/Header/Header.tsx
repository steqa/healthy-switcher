import classes from "./Header.module.css";

export const Header = () => {
	return (
		<div className={classes.container}>
			<img src="/logo-text.svg" alt="logo" className={classes.logo}/>
			<div className={classes.navigation}>
				<a href="#" className={classes.item}>Menu</a>
				<a href="#" className={classes.item}>Recipes</a>
				<a href="#" className={classes.item}>Chefs</a>
				<a href="#" className={classes.item}>Contacts</a>
			</div>
		</div>
	)
}