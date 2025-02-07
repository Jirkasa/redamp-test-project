import React from "react";
import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
    children?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
    return (
        <p className={styles.message}>{children}</p>
    )
}

export default ErrorMessage;