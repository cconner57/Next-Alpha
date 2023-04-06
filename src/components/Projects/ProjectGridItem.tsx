import styles from "@/styles/Projects.module.scss";
import Image from "next/image";
import { avatar1_40, avatar2_40, avatar3_40 } from "../../../public/Avatars";
import {
    attachment2,
    chat2,
    more2,
    time2
} from "../../../public/Icons";
import { projectLogo } from "../../../public/Other";

export const ProjectGridItem = () => {
	return (
		<div className={styles.projectItem}>
			<Image width={20} height={20} src={more2} alt="more" />
			<div className={styles.projectImage}>
				<Image width={38} height={34} src={projectLogo} alt="Project Logo" />
			</div>
			<h5>App Development</h5>
			<p className={styles.subTitle}>Dropbox, Inc.</p>
			<div className={styles.participants}>
				<Image width={40} height={40} src={avatar1_40} alt="user" />
				<Image width={40} height={40} src={avatar2_40} alt="user" />
				<Image width={40} height={40} src={avatar3_40} alt="user" />
			</div>
			<div className={styles.tracker}>
				<div className={styles.details}>
					<p>50%</p>
					<p>9/18</p>
				</div>
				<div className={styles.progressbar} />
			</div>
			<div className={styles.footer}>
				<div className={styles.actions}>
					<Image width={20} height={20} src={chat2} alt="chat" />
					<p>19</p>
					<Image width={20} height={20} src={attachment2} alt="attachment" />
					<p>4</p>
				</div>
				<div className={styles.duration}>
					<Image width={20} height={20} src={time2} alt="time" />
					<p>1 week left</p>
				</div>
			</div>
		</div>
	);
};
