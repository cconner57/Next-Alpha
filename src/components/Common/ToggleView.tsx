import Image from "next/image";
import { grid, list2 } from "../../../public/Icons";
import styles from "./Common.module.scss";

interface ToggleViewProps {
	viewToggle: string;
	setViewToggle: (view: "grid" | "list") => void;
}

export const ToggleView = ({ viewToggle, setViewToggle }: ToggleViewProps) => {
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
