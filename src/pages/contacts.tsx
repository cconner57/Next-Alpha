import { Header, Page } from "@/components/Common";
import { ToggleView } from "@/components/Common/ToggleView";
import { ContactCard, ContactGrid } from "@/components/Contact";
import { contactsData } from "@/data/contacts";
import styles from "@/styles/Contacts.module.scss";
import { useState } from "react";

const Contacts = () => {
	const [viewToggle, setViewToggle] = useState<"grid" | "list">("grid");
	return (
		<Page>
			<Header title="Contacts" buttonText="+ Add Contact">
				<ToggleView viewToggle={viewToggle} setViewToggle={setViewToggle} />
			</Header>
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
		</Page>
	);
};

export default Contacts;
