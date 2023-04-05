import { Header, Page } from "@/components/Common";
import styles from "@/styles/Notes.module.scss";
import Image from "next/image";
import { filter3 } from "../../public/Icons";

const Chat = () => {
	return (
		<Page>
			<Header title="Chat" buttonText="+ Add Note">
				<div className={styles.filter}>
					<Image width={20} height={20} src={filter3} alt="filter" />
				</div>
			</Header>
		</Page>
	);
};

export default Chat;
