import styles from "@/styles/Common.module.scss";
import { ButtonProps } from "@/types/common";

export const Button = ({
	variant = "primary",
	size = "small",
	text,
}: ButtonProps) => {
	const variantClass = {
		primary: styles.button__primary,
		secondary: styles.button__secondary,
	}[variant];

	const sizeClass = {
    extraSmall: styles.button__extraSmall,
		small: styles.button__small,
		medium: styles.button__medium,
		large: styles.button__large,
	}[size];

	return (
		<>
			<button className={`${variantClass} ${sizeClass}`}>{text}</button>
		</>
	);
};
