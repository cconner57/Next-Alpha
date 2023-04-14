import styles from "@/styles/Projects.module.scss";
import { ProjectGridItemProps } from "@/types/projects";
import Image from "next/image";
import {
	avatar1_40,
	avatar2_40,
	avatar3_40,
	avatar4_40,
	avatar5_40,
	avatar6_40,
	avatar7_40,
	avatar8_40,
	avatar9_40,
	avatar10_40,
	avatar11_40,
} from "../../../public/Avatars";
import { attachment2, chat2, more2, time2 } from "../../../public/Icons";
import { projectLogo } from "../../../public/Other";

export const ProjectGridItem = ({
	item: {
		title,
		subTitle,
		participants,
		totalTask,
		completedTask,
		messages,
		attachments,
		dueDate,
	},
}: {
	item: ProjectGridItemProps;
}) => {
	const randomDefaultAvatar = () => {
		const random = Math.floor(Math.random() * 12);
		switch (random) {
			case 0:
				return avatar1_40;
			case 1:
				return avatar2_40;
			case 2:
				return avatar3_40;
			case 3:
				return avatar4_40;
			case 4:
				return avatar5_40;
			case 5:
				return avatar6_40;
			case 6:
				return avatar7_40;
			case 7:
				return avatar8_40;
			case 8:
				return avatar9_40;
			case 9:
				return avatar10_40;
			case 10:
				return avatar11_40;
			default:
				return avatar1_40;
		}
	};

	const completedTaskPercent = (completedTask / totalTask) * 100;

	const generateDueDate = () => {
		const currentDate = new Date();
		const itemDueDate = new Date(dueDate);

		const differenceInTime = itemDueDate.getTime() - currentDate.getTime();
		const totalDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

		if (totalDays > 30) {
			return [`${Math.ceil(totalDays / 30)} months`, styles.valid];
		}
		if (totalDays < 30 && totalDays > 7) {
			return [`${Math.ceil(totalDays / 7)} weeks`, styles.valid];
		}
		if (totalDays <= 7 && totalDays > 0) {
			return [`${totalDays} days`, styles.warning];
		}
		return ["0 days", styles.expired];
	};

	return (
		<div className={styles.projectItem}>
			<Image width={20} height={20} src={more2} alt="more" />
			<div className={styles.projectImage}>
				<Image width={38} height={34} src={projectLogo} alt="Project Logo" />
			</div>
			<h5>{title}</h5>
			<p className={styles.subTitle}>{subTitle}</p>
			<div className={styles.participants}>
				{participants.map((item) => (
					<Image
						key={item.id}
						width={40}
						height={40}
						src={item.image ? item.image : randomDefaultAvatar()}
						alt="user"
					/>
				))}
			</div>
			<div className={styles.tracker}>
				<div className={styles.details}>
					<p>{`${completedTaskPercent.toFixed()}%`}</p>
					<p>{`${completedTask}/${totalTask}`}</p>
				</div>
				<div className={styles.progressbar}>
					<div
						className={styles.activebar}
						style={{ width: `${completedTaskPercent}%` }}
					/>
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.actions}>
					<Image width={20} height={20} src={chat2} alt="chat" />
					<p>{messages}</p>
					<Image width={20} height={20} src={attachment2} alt="attachment" />
					<p>{attachments}</p>
				</div>
				<div className={`${styles.duration} ${generateDueDate()[1]}`}>
					<Image width={20} height={20} src={time2} alt="time" />
					<p>{generateDueDate()[0]}</p>
				</div>
			</div>
		</div>
	);
};
