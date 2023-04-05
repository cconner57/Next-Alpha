import styles from "@/styles/Contact.module.scss";
import Image from "next/image";
import { ContactDetailProps } from "../../types/contact";

export const ContactDetail = ({ icon, title, details }: ContactDetailProps) => {
	return (
		<div className={styles.contactDetail}>
			<Image width={20} height={20} src={icon} alt={title} />
			<div className={styles.container}>
				<p className={styles.title}>{title}</p>
				<p className={styles.details}>{details}</p>
			</div>
		</div>
	);
};
