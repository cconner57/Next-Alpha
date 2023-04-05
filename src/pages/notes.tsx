import { Button } from "@/components/Common/Button";
import { Modal } from "@/components/Common/Modal";
import { NoteItem, ViewNote } from "@/components/Notes";
import { Note, NoteModal } from "@/types/notes";
import Image from "next/image";
import { useState } from "react";
import { filter3 } from "../../public/Icons";
import { notesData } from "../data/notes";
import styles from "../styles/Notes.module.scss";

const Notes = () => {
	const [openModal, setOpenModal] = useState<NoteModal>({
		viewNote: false,
		addNote: false,
		editNote: false,
	});
	const [notes, setNotes] = useState<Note[]>(notesData);
	const [selectedNote, setSelectedNote] = useState<Note>({
		content: "",
		date: "",
		id: 0,
		pinned: false,
		title: "",
	});

	const deleteNote = (note: Note) => {
		setNotes(notes.filter((item) => item.id !== note.id));
		setOpenModal((prevItem) => ({ ...prevItem, viewNote: false }));
	};

	return (
		<main className={styles.notesPage}>
			<div className={styles.header}>
				<h2>Notes</h2>
				<div className={styles.actions}>
					<div className={styles.filter}>
						<Image width={20} height={20} src={filter3} alt="filter" />
					</div>
					<Button variant="primary" text="+ Add Note" />
				</div>
			</div>
			<div className={styles.body}>
				{notes.map((note: Note) => (
					<NoteItem
						key={note.id}
						note={note}
						toggleModal={() =>
							setOpenModal((prevItem) => ({ ...prevItem, viewNote: true }))
						}
						focusedNote={() => setSelectedNote(note)}
					/>
				))}
			</div>
			<Modal
				closeModal={() =>
					setOpenModal((prevItem) => ({ ...prevItem, viewNote: false }))
				}
				openModal={openModal.viewNote}>
				<ViewNote
					deleteNote={() => deleteNote(selectedNote)}
					closeModal={() =>
						setOpenModal((prevItem) => ({ ...prevItem, viewNote: false }))
					}
					selectedNote={selectedNote}
				/>
			</Modal>
		</main>
	);
};

export default Notes;
