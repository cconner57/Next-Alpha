import { Button } from "@/components/Common/Button";
import { ContactCard, ContactGrid } from "@/components/Contact";
import { useState } from "react";
import { ToggleView } from "@/components/Common/ToggleView";

const Contacts = () => {
	const [viewToggle, setViewToggle] = useState<"grid" | "list">("grid");
	return (
		<main style={{ backgroundColor: "#151517", padding: '0 30px' }}>
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
				<div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: '30px' }}>
					<ContactGrid
						name="John Smith"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
					/>
					<ContactGrid
						name="John Smith"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
					/>
					<ContactGrid
						name="John Smith"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
					/>
					<ContactGrid
						name="John Smith"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
					/>
					<ContactGrid
						name="John Smith"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
					/>
					<ContactGrid
						name="John Smith"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
					/>
					<ContactGrid
						name="John Smith"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
					/>
					<ContactGrid
						name="John Smith"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
					/>
				</div>
			)}
			{viewToggle === "list" && (
				<>
					<ContactCard
						name="Mitchell Cooper"
						title="Creative Director"
						email="cooper@mail.com"
						phoneNumber="+123-4567-8800"
						birthday="17 March, 1995"
						address="New York, NY"
					/>
					<ContactCard
						name="Judith Black"
						title="Project Manager"
						email="black@mail.com"
						phoneNumber="+123-4567-8800"
						birthday="17 March, 1995"
						address="Paris, France"
					/>
					<ContactCard
						name="Dustin Williamson"
						title="UI/UX Designer"
						email="dustin@mail.com"
						phoneNumber="+123-4567-8800"
						birthday="17 March, 1995"
						address="Berlin, Germany"
					/>
					<ContactCard
						name="Ronald Robertson"
						title="Backend Developer"
						email="robertson@mail.com"
						phoneNumber="+123-4567-8800"
						birthday="17 March, 1995"
						address="Sydney, Australia"
					/>
					<ContactCard
						name="Lily Williamson"
						title="Project Manager"
						email="lily@example.com"
						phoneNumber="+123-4567-8800"
						birthday="17 March, 1995"
						address="Canada, Ottawa"
					/>
				</>
			)}
		</main>
	);
};

export default Contacts;
