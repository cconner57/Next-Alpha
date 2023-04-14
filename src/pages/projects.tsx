import { Header, Page } from "@/components/Common";
import { TabMenu } from "@/components/Projects/TabMenu";
import styles from "@/styles/Projects.module.scss";
import { tabMenu } from "@/types/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { filter3 } from "../../public/Icons";
import { ProjectGridItem } from "@/components/Projects/ProjectGridItem";
import { projectsData } from "@/data/projects";

const Projects = () => {
	const [selectedTab, setSelectedTab] = useState<tabMenu>("All" as unknown as tabMenu);
	const [projects, setProjects] = useState(projectsData);

	useEffect(() => {
		if (selectedTab === "All" as unknown as tabMenu) {
			setProjects(projectsData);
		}
		if (selectedTab === "Started" as unknown as tabMenu) {
			setProjects(projectsData.filter((item) => item.status === "started"));
		}
		if (selectedTab === "On Hold" as unknown as tabMenu) {
			setProjects(projectsData.filter((item) => item.status === "on hold"));
		}
		if (selectedTab === "Completed" as unknown as tabMenu) {
			setProjects(projectsData.filter((item) => item.status === "completed"));
		}
	}, [selectedTab]);

	return (
		<Page>
			<Header title="Projects" buttonText="+ Add Project">
				<div className={styles.filter}>
					<Image width={20} height={20} src={filter3} alt="filter" />
				</div>
			</Header>
			<TabMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} projects={projectsData} />
			<div className={styles.projects}>
				{projects.map((item) => (
					<ProjectGridItem key={item.id} item={item} />
				))}
			</div>
		</Page>
	);
};

export default Projects;
