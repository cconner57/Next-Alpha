import { Button } from "@/components/Common/Button";
import { Modal } from "@/components/Common/Modal";
import { NoteItem, ViewNote } from "@/components/Notes";
import Image from "next/image";
import { useState } from "react";
import { filter3 } from "../../public/Icons";
import { Note } from "../types/notes";
import { notesData } from "../data/notes"

const Notes = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [notes, setNotes] = useState<Note[]>(notesData);
	const [selectedNote, setSelectedNote] = useState<Note>({
		content: "",
		date: "",
		id: 0,
		pinned: false,
		title: "",
	});

	const deleteNote = (note: Note) => {
		console.log("deleted note");
		setNotes(notes.filter((item) => item.id !== note.id));
		setOpenModal(false);
	};

	return (
		<main
			style={{
				backgroundColor: "#151517",
				padding: "0 30px",
				width: "90.5 vw",
				position: "relative",
			}}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2
					style={{
						fontFamily: "Nunito",
						fontStyle: "normal",
						fontWeight: "700",
						fontSize: "32px",
						lineHeight: "44px",
						display: "flex",
						alignItems: "center",
						color: "#FFFFFF",
						margin: "32px 0",
					}}>
					Notes
				</h2>
				<div style={{ display: "flex", gap: "16px", margin: "30px" }}>
					<div
						style={{
							padding: "14px",
							border: "1px solid #232324",
							borderRadius: "14px ",
							cursor: "pointer",
						}}>
						<Image width={20} height={20} src={filter3} alt="filter" />
					</div>
					<Button variant="primary" text="+ Add Note" />
				</div>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
					gridGap: "20px 0px",
					overflow: "auto",
					height: "70.4vh",
					paddingBottom: "40px",
				}}>
				{notes.map((note: Note) => (
					<NoteItem
						key={note.id}
						note={note}
						toggleModal={() => setOpenModal(!openModal)}
						focusedNote={() => setSelectedNote(note)}
					/>
				))}
			</div>
			<Modal closeModal={() => setOpenModal(!openModal)} openModal={openModal}>
				<ViewNote
					deleteNote={() => deleteNote(selectedNote)}
					closeModal={() => setOpenModal(false)}
					selectedNote={selectedNote}
				/>
			</Modal>
		</main>
	);
};

export default Notes;
