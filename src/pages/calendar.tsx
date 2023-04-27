import { Header, Page } from "@/components/Common";
import Image from "next/image";
import { filter3, arrowLeft, arrowRight } from "../../public/Icons";
import styles from "@/styles/Calendar.module.scss";

const Calendar = () => {
	return (
		<Page>
			<Header title="Calendar" buttonText="+ Add Event"></Header>
			<div className={styles.calendar}>
				<div className={styles.calendar__header}>
					<div className={styles.header__actions}>
						<div className={styles.navigate}>
							<Image width={20} height={20} src={arrowLeft} alt="left arrow" />
							<div className={styles.line} />
							<Image
								width={20}
								height={20}
								src={arrowRight}
								alt="right arrow"
							/>
						</div>
						<p>Today</p>
					</div>
					<div className={styles.header__date}>
						<p>January </p>
						<p>2023</p>
					</div>
					<div className={styles.header__toggle}>
						<div>Month</div>
						<div>Week</div>
						<div>Day</div>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Calendar;
