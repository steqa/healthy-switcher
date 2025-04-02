import {FC, ReactNode} from "react";
import classes from "./Card.module.css";

interface CardProps {
	header: string,
	children: ReactNode,
}

export const Card: FC<CardProps> = (
	{
		header,
		children,
	}
) => {
	return (
		<div className={classes.card}>
			<p className={classes.header}>{header}</p>
			<hr className={classes.divider}/>
			<p className={classes.content}>{children}</p>
		</div>
	)
}