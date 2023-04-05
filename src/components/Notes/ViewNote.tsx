import styles from "../../styles/Note.module.scss";
import Image from "next/image";
import {
	alignLeft,
	calendar2,
	deleteIcon,
	edit,
	more2,
	x,
} from "../../../public/Icons";
import { ViewNoteProps } from "../../types/notes";

export const ViewNote = ({
	deleteNote,
	closeModal,
	selectedNote,
}: ViewNoteProps) => {
	return (
		<div
			className={styles.modal__container}
			onClick={(e) => e.stopPropagation()}>
			<div className={styles.actions}>
				<Image width={20} height={20} src={edit} alt="edit" />
				<Image
					width={20}
					height={20}
					src={deleteIcon}
					alt="delete"
					onClick={deleteNote}
				/>
				<Image width={20} height={20} src={more2} alt="more" />
				<Image
					width={20}
					height={20}
					src={x}
					alt="close"
					onClick={closeModal}
				/>
			</div>
			<h5>{selectedNote.title}</h5>
			<div className={styles.calendar}>
				<Image width={20} height={20} src={calendar2} alt="Calendar" />
				<p>{selectedNote.date}</p>
			</div>
			<div className={styles.body}>
				<Image width={20} height={20} src={alignLeft} alt="Align Left" />
				<p>{selectedNote.content}</p>
			</div>
		</div>
	);
};
