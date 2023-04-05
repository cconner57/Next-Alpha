import { NavBar } from "@/components/NavBar/NavBar";
import { SettingsBar } from "@/components/SettingsBar/SettingsBar";
import "@/styles/globals.scss";
import { TabState } from "@/types/navbar";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (window === undefined) return;
		const currentTab = localStorage.getItem("currentTab") ?? "contacts";
		setCurrentTab(currentTab as any);
	}, []);

	const [currentTab, setCurrentTab] = useState<TabState>("dashboard" as any);
	return (
		<div style={{ display: "flex", overflow: "hidden", minWidth: "100vw" }}>
			<NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minWidth: "94.05vw",
					maxHeight: "100vh",
				}}>
				<SettingsBar />
				<Component {...pageProps} />
			</div>
		</div>
	);
}
