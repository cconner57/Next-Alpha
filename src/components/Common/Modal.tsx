import styles from "@/styles/Common.module.scss";
import { ModalProps } from "@/types/common";

export const Modal = ({ closeModal, openModal, children }: ModalProps) => {
	if (!openModal) return null;
	return (
		<div className={styles.modal} onClick={closeModal}>
			{children}
		</div>
	);
};
