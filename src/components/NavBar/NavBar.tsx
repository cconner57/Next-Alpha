import { NavBarProps, TabState } from "@/types/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { logo } from "../../../public/Avatars";
import {
	calendar2,
	cart,
	chat2,
	contacts2,
	dashboard,
	fileManager,
	mail2,
	notes,
	project2,
	tasks3,
} from "../../../public/Icons";
import styles from "./NavBar.module.scss";

export const NavBar = ({ currentTab, setCurrentTab }: NavBarProps) => {
	const router = useRouter();

	const changeRoutes = (tab: TabState) => {
		router.push(`/${tab}`);
		setCurrentTab(tab);
		localStorage.setItem("currentTab", tab.toString());
	};

	return (
		<div className={styles.navBar}>
			<Image
				className={styles.logo}
				width={36}
				height={37}
				src={logo}
				alt="logo"
			/>
			<div className={styles.navBar__links}>
				<Image
					className={`${currentTab === ("dashboard" as any) && styles.active}`}
					onClick={() => changeRoutes("dashboard" as any)}
					width={22}
					height={22}
					src={dashboard}
					alt="dashboard"
				/>
				<Image
					className={`${currentTab === ("cart" as any) && styles.active}`}
					onClick={() => changeRoutes("cart" as any)}
					width={22}
					height={22}
					src={cart}
					alt="cart"
				/>
				<Image
					className={`${currentTab === ("calendar" as any) && styles.active}`}
					onClick={() => changeRoutes("calendar" as any)}
					width={22}
					height={22}
					src={calendar2}
					alt="calendar"
				/>
				<Image
					className={`${currentTab === ("mail" as any) && styles.active}`}
					onClick={() => changeRoutes("mail" as any)}
					width={22}
					height={22}
					src={mail2}
					alt="mail"
				/>
				<Image
					className={`${currentTab === ("chat" as any) && styles.active}`}
					onClick={() => changeRoutes("chat" as any)}
					width={22}
					height={22}
					src={chat2}
					alt="chat"
				/>
				<Image
					className={`${currentTab === ("tasks" as any) && styles.active}`}
					onClick={() => changeRoutes("tasks" as any)}
					width={22}
					height={22}
					src={tasks3}
					alt="tasks"
				/>
				<Image
					className={`${currentTab === ("projects" as any) && styles.active}`}
					onClick={() => changeRoutes("projects" as any)}
					width={22}
					height={22}
					src={project2}
					alt="project"
				/>
				<Image
					className={`${currentTab === ("files" as any) && styles.active}`}
					onClick={() => changeRoutes("files" as any)}
					width={22}
					height={22}
					src={fileManager}
					alt="file manager"
				/>
				<Image
					className={`${currentTab === ("notes" as any) && styles.active}`}
					onClick={() => changeRoutes("notes" as any)}
					width={22}
					height={22}
					src={notes}
					alt="notes"
				/>
				<Image
					className={`${currentTab === ("contacts" as any) && styles.active}`}
					onClick={() => changeRoutes("contacts" as any)}
					width={22}
					height={22}
					src={contacts2}
					alt="contacts"
				/>
			</div>
		</div>
	);
};
