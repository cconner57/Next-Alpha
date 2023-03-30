import Image from "next/image";
import { avatar1_40 } from "../../../public/Avatars";
import {
	calendar,
	ellipsis,
	location,
	mail,
	phone,
	video
} from "../../../public/Icons";
import { Icon } from "../Common/Icon";
import { ContactDetail } from "./ContactDetail";

import styles from "./Contact.module.scss";

interface ContactCardProps {
	profileImage?: any;
	name?: string;
	title?: string;
	email?: string;
	phoneNumber?: string;
	birthday?: string;
	address?: string;
}

export const ContactCard = ({
	profileImage,
	name = "John Smith",
	title = "Creative Director",
	email = "cooper@mail.com",
	phoneNumber = "+123-4567-8800",
	birthday = "17 March, 1995",
	address = "New York, NY",
}: ContactCardProps) => {
	return (
		<div className={styles.contactCard}>
			<Image width={64} height={64} src={profileImage || avatar1_40} alt="avatar" />
			<div className={styles.contactCard__main}>
				<div className={styles.header}>
					<div className={styles.header__contact}>
						<h5 className={styles.name}>{name}</h5>
						<div className={styles.title}>
							<p>{title}</p>
						</div>
					</div>
					<div className={styles.iconGroup}>
						<Icon image={phone} alt="phone" />
						<Icon image={video} alt="video" />
						<Icon image={ellipsis} alt="ellipsis" />
					</div>
				</div>
				<hr />
				<div className={styles.footer}>
					<ContactDetail icon={mail} title="Email" details={email} />
					<ContactDetail icon={phone} title="Phone" details={phoneNumber} />
					<ContactDetail icon={calendar} title="Birthday" details={birthday} />
					<ContactDetail icon={location} title="Location" details={address} />
				</div>
			</div>
		</div>
	);
};
