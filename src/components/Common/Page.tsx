import React from "react";
import styles from "@/styles/Common.module.scss";
import { PageProps } from "@/types/common";

export const Page = ({ children }: PageProps) => {
	return <main className={styles.page}>{children}</main>;
};
