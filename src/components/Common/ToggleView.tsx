import styles from "@/styles/Common.module.scss";
import { IToggleView } from "@/types/common";
import Image from "next/image";
import { grid, list2 } from "../../../public/Icons";

export const ToggleView = ({ viewToggle, setViewToggle }: IToggleView) => {
	return (
		<div className={styles.toggleView}>
			<div
				onClick={() => setViewToggle("grid")}
				className={viewToggle === "grid" ? styles.active : styles.inactive}>
				<Image width={20} height={20} src={grid} alt="grid" />
			</div>
			<div
				onClick={() => setViewToggle("list")}
				className={viewToggle === "list" ? styles.active : styles.inactive}>
				<Image width={20} height={20} src={list2} alt="list" />
			</div>
		</div>
	);
};
