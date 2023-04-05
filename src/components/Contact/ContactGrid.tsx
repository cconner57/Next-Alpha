import styles from "@/styles/Contacts.module.scss";
import Image from "next/image";
import { avatar1_150 } from "../../../public/Avatars";
import { more2 } from "../../../public/Icons";
import { ContactGridProps } from "../../types/contact";

export const ContactGrid = ({
	profileImage,
	name = "John Smith",
	title = "Creative Director",
	email = "cooper@mail.com",
	phoneNumber = "+123-4567-8800",
}: ContactGridProps) => {
	return (
		<div className={styles.contactGrid}>
			<Image width={26} height={26} src={more2} alt="avatar" />
			<Image
				width={150}
				height={150}
				src={profileImage || avatar1_150}
				alt="avatar"
			/>
			<h4 className={styles.name}>{name}</h4>
			<div className={styles.title}>
				<p>{title}</p>
			</div>
			<p className={styles.details}>{email}</p>
			<p className={styles.details}>{phoneNumber}</p>
			<div className={styles.message}>
				<p>Message</p>
			</div>
		</div>
	);
};
