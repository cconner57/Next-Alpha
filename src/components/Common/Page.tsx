import React from "react";
import styles from "@/styles/Common.module.scss";
import { IPage } from "@/types/common";

export const Page = ({ children }: IPage) => {
	return <main className={styles.page}>{children}</main>;
};
