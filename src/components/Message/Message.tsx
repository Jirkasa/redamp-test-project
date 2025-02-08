import React from "react";
import styles from "./Message.module.scss";

interface MessageProps {
    children?: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ children }) => {
    return (
        <p className={styles.message}>{children}</p>
    );
}

export default Message;