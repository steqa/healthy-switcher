import {FC, ReactNode} from "react";
import classes from "./ContactsItem.module.css"

interface ContactsItemProps {
	iconPath: string,
	title: ReactNode,
	subtitle: ReactNode,
}

export const ContactsItem: FC<ContactsItemProps> = (
	{
		iconPath,
		title,
		subtitle,
	}
) => {
	return (
		<div className={classes.container}>
			<img src={iconPath} alt="icon" className={classes.icon}/>
			<p>{title}</p>
			<p className={classes.subtitle}>{subtitle}</p>
		</div>
	)
}