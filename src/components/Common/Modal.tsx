import styles from "@/styles/Common.module.scss";
import { IModal } from "@/types/common";

export const Modal = ({ closeModal, openModal, children }: IModal) => {
	if (!openModal) return null;
	return (
		<div className={styles.modal} onClick={closeModal}>
			{children}
		</div>
	);
};
