import React from "react";
import styles from "@/styles/Projects.module.scss";
import { tabMenu, ProjectGridItemProps } from "@/types/projects";

interface TabMenuProps {
	selectedTab: tabMenu;
	setSelectedTab: (tab: tabMenu) => void;
	projects: ProjectGridItemProps[];
}

export const TabMenu = ({
	selectedTab,
	setSelectedTab,
	projects,
}: TabMenuProps) => {
	return (
		<div className={styles.tabMenu}>
			<p
				className={
					selectedTab === ("All" as unknown as tabMenu)
						? styles.active
						: undefined
				}
				onClick={() => setSelectedTab("All" as unknown as tabMenu)}>
				All ({projects.length})
			</p>
			<p
				className={
					selectedTab === ("Started" as unknown as tabMenu)
						? styles.active
						: undefined
				}
				onClick={() => setSelectedTab("Started" as unknown as tabMenu)}>
				Started ({projects.filter((item) => item.status === "started").length})
			</p>
			<p
				className={
					selectedTab === ("On Hold" as unknown as tabMenu)
						? styles.active
						: undefined
				}
				onClick={() => setSelectedTab("On Hold" as unknown as tabMenu)}>
				On Hold ({projects.filter((item) => item.status === "on hold").length})
			</p>
			<p
				className={
					selectedTab === ("Completed" as unknown as tabMenu)
						? styles.active
						: undefined
				}
				onClick={() => setSelectedTab("Completed" as unknown as tabMenu)}>
				Completed (
				{projects.filter((item) => item.status === "completed").length})
			</p>
		</div>
	);
};
