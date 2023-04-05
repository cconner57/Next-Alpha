import { Button } from "@/components/Common/Button";
import { ToggleView } from "@/components/Common/ToggleView";
import { ContactCard, ContactGrid } from "@/components/Contact";
import { contactsData } from "@/data/contacts";
import { useState } from "react";

const Contacts = () => {
	const [viewToggle, setViewToggle] = useState<"grid" | "list">("grid");
	return (
		<main
			style={{
				backgroundColor: "#151517",
				padding: "0 30px",
				width: "90.5 vw",
				overflow: "auto",
				height: "88.2vh",
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
					Contacts
				</h2>
				<div style={{ display: "flex", gap: "16px", margin: "30px" }}>
					<ToggleView viewToggle={viewToggle} setViewToggle={setViewToggle} />
					<Button variant="primary" text="+ Add Contact" />
				</div>
			</div>
			{viewToggle === "grid" && (
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(4, 1fr)",
						gridGap: "20px",
					}}>
					{contactsData.map((contact) => (
						<ContactGrid
							key={contact.id}
							name={contact.name}
							title={contact.title}
							email={contact.email}
							phoneNumber={contact.phoneNumber}
						/>
					))}
				</div>
			)}
			{viewToggle === "list" && (
				<>
					{contactsData.map((contact) => (
						<ContactCard
							key={contact.id}
							name={contact.name}
							title={contact.title}
							email={contact.email}
							phoneNumber={contact.phoneNumber}
							birthday={contact.birthday}
							address={contact.address}
						/>
					))}
				</>
			)}
		</main>
	);
};

export default Contacts;
