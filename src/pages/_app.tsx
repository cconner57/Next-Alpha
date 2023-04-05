import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SettingsBar } from "@/components/SettingsBar/SettingsBar";
import { NavBar } from "@/components/NavBar/NavBar";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [currentTab, setCurrentTab] = useState<
		| "dashboard"
		| "cart"
		| "calendar"
		| "mail"
		| "chat"
		| "tasks"
		| "projects"
		| "notes"
		| "files"
		| "contacts"
	>("contacts");
	return (
		<div style={{ display: "flex", overflow: "hidden" }}>
			<NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<SettingsBar />
				<Component {...pageProps} />
			</div>
		</div>
	);
}
