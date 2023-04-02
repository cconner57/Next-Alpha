import Image from "next/image";
import { useState } from "react";
import { calendar, pushpin } from "../../../public/Icons";

import styles from "./Note.module.scss";

interface NoteItemProps {
	pinned: boolean;
}

export const NoteItem = ({ pinned }: NoteItemProps) => {
	const [toggleFilter, setToggleFilter] = useState<boolean>(pinned);

	return (
		<div
			className={styles.noteItem}
			style={
				toggleFilter
					? { backgroundColor: "#FFD073" }
					: { backgroundColor: "#202123" }
			}>
			<div
				className={styles.shadow}
				style={
					toggleFilter
						? { backgroundColor: "#FFD073" }
						: { backgroundColor: "#202123" }
				}
			/>
			<div
				className={styles.header}
				style={
					toggleFilter
						? { backgroundColor: "#F7C663" }
						: { backgroundColor: "#262729" }
				}>
				<div className={styles.date}>
					<Image
						className={styles.image}
						width={20}
						height={20}
						src={calendar}
						alt="Calendar"
						style={toggleFilter ? { filter: "brightness(0%)" } : undefined}
					/>
					<p
						className={styles.image}
						style={toggleFilter ? { color: "#28263B" } : { color: "#ffffff" }}>
						June 13, 2021
					</p>
				</div>
				<Image
					style={toggleFilter ? { filter: "brightness(0%)" } : undefined}
					width={20}
					height={20}
					src={pushpin}
					alt="Pushpin"
					onClick={() => setToggleFilter(!toggleFilter)}
				/>
			</div>
			<h5
				className={styles.title}
				style={toggleFilter ? { color: "#1A1926" } : { color: "#ffffff" }}>
				Title of the note
			</h5>
			<p
				className={styles.content}
				style={toggleFilter ? { color: "#28263B" } : { color: "#E8E8E8" }}>
				Lorem ipsum dolor sit amet, ullamcous cididunt consectetur adipiscing
				elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels
				aliqua. Ut enim ad nesid utminim veniam, quis nostrud eiusmo
				exercitation ullamco labori is amco commodo consequat seds eiusmod.
			</p>
		</div>
	);
};
