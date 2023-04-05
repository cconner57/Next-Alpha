export interface Note {
	id: number;
	title: string;
	pinned: boolean;
	date: string;
	content: string;
}

export interface NoteItemProps {
	note: Note;
	toggleModal: () => void;
	focusedNote: () => void;
}

export interface ViewNoteProps {
	deleteNote: () => void;
	closeModal: () => void;
	selectedNote: Note;
}

export interface NoteModal {
	viewNote: boolean;
	addNote: boolean;
	editNote: boolean;
}
