import { Button } from "@/components/Common/Button";
import Image from "next/image";
import { filter3 } from "../../public/Icons";
import { NoteItem } from "@/components/Notes/NoteItem";

const Notes = () => {
	return (
		<main
			style={{
				backgroundColor: "#151517",
				padding: "0 30px",
				width: "90.5 vw",
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
				<NoteItem pinned={true} />
				<NoteItem pinned={true} />
				<NoteItem pinned={true} />
				<NoteItem pinned={true} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
				<NoteItem pinned={false} />
			</div>
		</main>
	);
};

export default Notes;
