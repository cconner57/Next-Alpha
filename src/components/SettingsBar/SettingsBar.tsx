import Image from "next/image";
import { avatar1_40 } from "../../../public/Avatars";
import {
	arrowLeft, menu, notification, search2,
	setting
} from "../../../public/Icons";
import styles from "@/styles/SettingsBar.module.scss";

export const SettingsBar = () => {
	return (
		<div className={styles.settingsBar}>
			<div style={{ display: "flex" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						marginRight: "48px",
					}}>
					<Image width={20} height={20} src={arrowLeft} alt="avatar" />
					<Image width={30} height={30} src={menu} alt="avatar" />
				</div>
				<div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
					<Image width={30} height={30} src={search2} alt="avatar" />
					<input
						style={{
							backgroundColor: "#151517",
							paddingLeft: "16px",
							color: "#9E9E9E",
							fontFamily: "Nunito",
							fontSize: "15px",
							fontStyle: "normal",
							fontWeight: "400",
							height: "25px",
							lineHeight: "20px",
							width: "250px",
						}}
						type="text"
						placeholder="Search anything..."
					/>
				</div>
			</div>
			<div className={styles.actions}>
				<Image width={30} height={30} src={setting} alt="avatar" />
				<Image width={30} height={30} src={notification} alt="avatar" />
				<div />
				<Image width={45} height={45} src={avatar1_40} alt="avatar" />
			</div>
		</div>
	);
};
