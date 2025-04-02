import {ContactsItem} from "./ContactsItem.tsx";
import classes from "./Contacts.module.css";

export const Contacts = () => {
	return (
		<div className={classes.container}>
			<ContactsItem iconPath={"/icons/clock.svg"} title="Today 10:00 am - 7:00 pm" subtitle={"Working hours"}/>
			<ContactsItem iconPath={"/icons/map-arrow.svg"} title="Velyka Vasylkivska 100" subtitle={"Get Directions"}/>
			<ContactsItem iconPath={"/icons/phone.svg"} title="+38 (063)833 24 15" subtitle={"Call Online"}/>
		</div>
	)
}