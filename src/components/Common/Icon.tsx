import Image from "next/image";
import { IconProps } from "./Interface";

import styles from "./Common.module.scss";

export const Icon = ({ image, alt }: IconProps) => {
	return (
		<div className={styles.icon}>
			<Image width={20} height={20} src={image} alt={alt} />
		</div>
	);
};
