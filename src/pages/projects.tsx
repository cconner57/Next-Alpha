import { Header, Page } from "@/components/Common";
import styles from "@/styles/Notes.module.scss";
import Image from "next/image";
import { filter3 } from "../../public/Icons";

const Projects = () => {
	return (
		<Page>
			<Header title="Projects" buttonText="+ Add Note">
				<div className={styles.filter}>
					<Image width={20} height={20} src={filter3} alt="filter" />
				</div>
			</Header>
		</Page>
	);
};

export default Projects;
