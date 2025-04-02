import classes from "./LayeredHeader.module.css"
import {FC, ReactNode} from "react";

interface LayeredHeaderProps {
	children: ReactNode,
	placeholder: string,
	dimmed?: boolean,
}

export const LayeredHeader: FC<LayeredHeaderProps> = (
	{
		children,
		placeholder,
		dimmed = false,
	}
) => {
	const getClasses = () => {
		const classList = [classes.container];
		if (dimmed) classList.push(classes.dimmed);
		return classList.join(" ")
	}

	return (
		<div className={getClasses()}>
			<h1 className={classes.header}>{children}</h1>
			<h2 className={classes.placeholder}>{placeholder}</h2>
			<div className={classes.underline}></div>
		</div>
	)
}