import {FC, ReactNode} from "react";
import classes from "./Button.module.css";

interface ButtonProps {
	children: ReactNode,
	big?: boolean,
	outline?: boolean,
}

export const Button: FC<ButtonProps> = (
	{
		children,
		big = false,
		outline = false,
	}
) => {
	const getClasses = () => {
		const classList = [classes.button]
		if (big) classList.push(classes.big)
		if (outline) classList.push(classes.outline)
		return classList.join(" ")
	}

	return (
		<button className={getClasses()}>{children}</button>
	)
}