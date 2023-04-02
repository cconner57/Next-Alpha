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
	tasks3
} from "../../../public/Icons";
import styles from "./NavBar.module.scss";

interface NavBarProps {
	currentTab: string;
	setCurrentTab: (
		tab:
			| "dashboard"
			| "cart"
			| "calendar"
			| "mail"
			| "chat"
			| "tasks"
			| "files"
			| "notes"
			| "contacts"
			| "projects"
	) => void;
}

export const NavBar = ({ currentTab, setCurrentTab }: NavBarProps) => {
	const router = useRouter();

	const changeRoutes = (
		tab:
			"dashboard"
			| "cart"
			| "calendar"
			| "mail"
			| "chat"
			| "tasks"
			| "files"
			| "notes"
			| "contacts"
			| "projects"
	) => {
		router.push(`/${tab}`);
		setCurrentTab(tab);
		localStorage.setItem("currentTab", tab);
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
					className={`${currentTab === "dashboard" && styles.active}`}
					onClick={() => changeRoutes("dashboard")}
					width={22}
					height={22}
					src={dashboard}
					alt="dashboard"
				/>
				<Image
					className={`${currentTab === "cart" && styles.active}`}
					onClick={() => changeRoutes("cart")}
					width={22}
					height={22}
					src={cart}
					alt="cart"
				/>
				<Image
					className={`${currentTab === "calendar" && styles.active}`}
					onClick={() => changeRoutes("calendar")}
					width={22}
					height={22}
					src={calendar2}
					alt="calendar"
				/>
				<Image
					className={`${currentTab === "mail" && styles.active}`}
					onClick={() => changeRoutes("mail")}
					width={22}
					height={22}
					src={mail2}
					alt="mail"
				/>
				<Image
					className={`${currentTab === "chat" && styles.active}`}
					onClick={() => changeRoutes("chat")}
					width={22}
					height={22}
					src={chat2}
					alt="chat"
				/>
				<Image
					className={`${currentTab === "tasks" && styles.active}`}
					onClick={() => changeRoutes("tasks")}
					width={22}
					height={22}
					src={tasks3}
					alt="tasks"
				/>
				<Image
					className={`${currentTab === "projects" && styles.active}`}
					onClick={() => changeRoutes("projects")}
					width={22}
					height={22}
					src={project2}
					alt="project"
				/>
				<Image
					className={`${currentTab === "files" && styles.active}`}
					onClick={() => changeRoutes("files")}
					width={22}
					height={22}
					src={fileManager}
					alt="file manager"
				/>
				<Image
					className={`${currentTab === "notes" && styles.active}`}
					onClick={() => changeRoutes("notes")}
					width={22}
					height={22}
					src={notes}
					alt="notes"
				/>
				<Image
					className={`${currentTab === "contacts" && styles.active}`}
					onClick={() => changeRoutes("contacts")}
					width={22}
					height={22}
					src={contacts2}
					alt="contacts"
				/>
			</div>
		</div>
	);
};
