import styles from "@/styles/Common.module.scss";
import { IIcon } from "@/types/common";
import Image from "next/image";

export const Icon = ({ image, alt }: IIcon) => {
	return (
		<div className={styles.icon}>
			<Image width={20} height={20} src={image} alt={alt} />
		</div>
	);
};
