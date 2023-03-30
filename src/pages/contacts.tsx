import { Button } from "@/components/Common/Button";
import { ContactCard } from "@/components/Contact/ContactCard";
import Image from "next/image";
import { useState } from "react";
import { grid, list } from "../../public";

const Contacts = () => {
	const [viewToggle, setViewToggle] = useState<"grid" | "list">("grid");
	return (
		<main>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h2>Contacts</h2>
				<div style={{ display: "flex" }}>
					<div
						style={{
							maxWidth: "104px",
							maxHeight: "48px",
							background: "#313133",
							borderRadius: "14px",
							padding: "4px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "10px",
						}}>
						<div
							style={
								viewToggle === "grid"
									? {
											width: "48px",
											height: "40px",

											background:
												"linear-gradient(180deg, #46464A 83.86%, #38383B 100%)",
											boxShadow:
												"0px 4px 8px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.04)",
											borderRadius: "12px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											cursor: "pointer",
									  }
									: {
											width: "48px",
											height: "40px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											cursor: "pointer",
									  }
							}>
							<Image
								width={20}
								height={20}
								src={grid}
								alt="grid"
								onClick={() => setViewToggle("grid")}
								style={viewToggle === "grid"
								? {
										filter:
											"brightness(0) saturate(100%) invert(52%) sepia(22%) saturate(4882%) hue-rotate(188deg) brightness(100%) contrast(102%)",
								  }
								: {}}
							/>
						</div>
						<div
							style={
								viewToggle === "list"
									? {
											width: "48px",
											height: "40px",

											background:
												"linear-gradient(180deg, #46464A 83.86%, #38383B 100%)",
											boxShadow:
												"0px 4px 8px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.04)",
											borderRadius: "12px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											cursor: "pointer",
									  }
									: {
											width: "48px",
											height: "40px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											cursor: "pointer",
									  }
							}>
							<Image
								width={16}
								height={16}
								src={list}
								alt="list"
								onClick={() => setViewToggle("list")}
								style={
									viewToggle === "list"
										? {
												filter:
													"brightness(0) saturate(100%) invert(52%) sepia(22%) saturate(4882%) hue-rotate(188deg) brightness(100%) contrast(102%)",
										  }
										: {}
								}
							/>
						</div>
					</div>
					<Button variant='primary' text="+ Add Contact" />
				</div>
			</div>
			{viewToggle === "grid" && (
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
