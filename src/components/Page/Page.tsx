import React from "react";
import styles from "./Page.module.scss";

interface PageProps {
    children?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <div className={styles.page}>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    );
}

export default Page;