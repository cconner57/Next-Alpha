import { Button } from "@/components/Common/Button";
import styles from "@/styles/Common.module.scss";
import { HeaderProps } from "@/types/common";

export const Header = ({ title, children, buttonText }: HeaderProps) => {
	return (
		<div className={styles.header}>
			<h2>{title}</h2>
			<div className={styles.actions}>
				{children}
				<Button variant="primary" text={buttonText} />
			</div>
		</div>
	);
};
