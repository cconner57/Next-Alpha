import React from "react";
import styles from "@/styles/Projects.module.scss";
import { tabMenu } from "@/types/projects";

interface TabMenuProps {
	selectedTab: tabMenu;
	setSelectedTab: (tab: tabMenu) => void;
}

export const TabMenu = ({ selectedTab, setSelectedTab }: TabMenuProps) => {
	return (
		<div className={styles.tabMenu}>
			<p
				className={selectedTab === ("All" as any) ? styles.active : undefined}
				onClick={() => setSelectedTab("All" as any)}>
				All (151)
			</p>
			<p
				className={
					selectedTab === ("Started" as any) ? styles.active : undefined
				}
				onClick={() => setSelectedTab("Started" as any)}>
				Started (128)
			</p>
			<p
				className={
					selectedTab === ("On Hold" as any) ? styles.active : undefined
				}
				onClick={() => setSelectedTab("On Hold" as any)}>
				On Hold (15)
			</p>
			<p
				className={
					selectedTab === ("Completed" as any) ? styles.active : undefined
				}
				onClick={() => setSelectedTab("Completed" as any)}>
				Completed (8)
			</p>
		</div>
	);
};
