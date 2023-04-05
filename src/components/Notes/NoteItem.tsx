import Image from "next/image";
import { useState } from "react";
import { calendar, pushpin } from "../../../public/Icons";
import { NoteItemProps } from "@/types/notes";
import styles from "../../styles/Note.module.scss";

export const NoteItem = ({
	note: { date, pinned, title, content },
	toggleModal,
	focusedNote,
}: NoteItemProps) => {
	const [toggleFilter, setToggleFilter] = useState<boolean>(pinned);

	return (
		<div
			className={styles.noteItem}
			style={
				toggleFilter
					? { backgroundColor: "#FFD073" }
					: { backgroundColor: "#202123" }
			}
			onClick={() => {
				focusedNote();
				toggleModal();
			}}>
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
						{date}
					</p>
				</div>
				<Image
					style={toggleFilter ? { filter: "brightness(0%)" } : undefined}
					width={20}
					height={20}
					src={pushpin}
					alt="Pushpin"
					onClick={(e) => {
						e.stopPropagation();
						setToggleFilter(!toggleFilter);
					}}
				/>
			</div>
			<h5
				className={styles.title}
				style={toggleFilter ? { color: "#1A1926" } : { color: "#ffffff" }}>
				{title}
			</h5>
			<p
				className={styles.content}
				style={toggleFilter ? { color: "#28263B" } : { color: "#E8E8E8" }}>
				{content}
			</p>
		</div>
	);
};
