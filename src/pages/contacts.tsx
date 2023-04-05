import { Button } from "@/components/Common/Button";
import { ToggleView } from "@/components/Common/ToggleView";
import { ContactCard, ContactGrid } from "@/components/Contact";
import { contactsData } from "@/data/contacts";
import { useState } from "react";
import styles from "../styles/Contacts.module.scss";

const Contacts = () => {
	const [viewToggle, setViewToggle] = useState<"grid" | "list">("grid");
	return (
		<main className={styles.contactsPage}>
			<div className={styles.header} style={{}}>
				<h2>Contacts</h2>
				<div className={styles.actions}>
					<ToggleView viewToggle={viewToggle} setViewToggle={setViewToggle} />
					<Button variant="primary" text="+ Add Contact" />
				</div>
			</div>
			{viewToggle === "grid" && (
				<div className={styles.bodyGrid}>
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
