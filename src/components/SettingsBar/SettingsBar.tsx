import styles from "@/styles/SettingsBar.module.scss";
import Image from "next/image";
import { useState } from "react";
import { avatar1_40 } from "../../../public/Avatars";
import {
	arrowLeft,
	chat2,
	lock,
	logout2,
	menu,
	notification,
	profile,
	search2,
	setting,
	tasks3,
} from "../../../public/Icons";

export const SettingsBar = () => {
	const [toggleSettingsModal, setToggleSettingsModal] = useState(false);

	return (
		<div
			className={styles.settingsBar}
			onMouseLeave={() => setToggleSettingsModal(!toggleSettingsModal)}>
			<div className={styles.search}>
				<div className={styles.navToggle}>
					<Image width={20} height={20} src={arrowLeft} alt="avatar" />
					<Image width={30} height={30} src={menu} alt="avatar" />
				</div>
				<div className={styles.searchBar}>
					<Image width={30} height={30} src={search2} alt="avatar" />
					<input type="text" placeholder="Search anything..." />
				</div>
			</div>
			<div className={styles.actions}>
				<Image width={30} height={30} src={setting} alt="avatar" />
				<Image width={30} height={30} src={notification} alt="avatar" />
				<div />
				<Image
					width={45}
					height={45}
					src={avatar1_40}
					alt="avatar"
					onClick={() => setToggleSettingsModal(!toggleSettingsModal)}
				/>
			</div>
			{toggleSettingsModal && (
				<div className={styles.settingsModal}>
					<div className={styles.settingsHeader}>
						<Image width={45} height={45} src={avatar1_40} alt="avatar" />
						<p>Mitchell Cooper</p>
					</div>
					<div className={styles.settingsItem}>
						<Image width={20} height={20} src={profile} alt="profile" />
						<p>My Profile</p>
					</div>
					<div className={styles.settingsItem}>
						<Image width={20} height={20} src={chat2} alt="chat" />
						<p>My Messages</p>
					</div>
					<div className={styles.settingsItem}>
						<Image width={20} height={20} src={tasks3} alt="tasks" />
						<p>My Tasks</p>
					</div>
					<div className={styles.settingsLine} />
					<div className={styles.settingsItem}>
						<Image width={20} height={20} src={setting} alt="setting" />
						<p>Settings</p>
					</div>
					<div className={styles.settingsItem}>
						<Image width={20} height={20} src={lock} alt="lock" />
						<p>Lock Screen</p>
					</div>
					<div className={styles.settingsLine} />
					<div className={styles.settingsItem}>
						<Image width={20} height={20} src={logout2} alt="logout" />
						<p>Logout</p>
					</div>
				</div>
			)}
		</div>
	);
};
