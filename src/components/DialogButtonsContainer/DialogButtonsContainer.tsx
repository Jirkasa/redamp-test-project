import React from "react";
import styles from "./DialogButtonsContainer.module.scss";

interface DialogButtonsContainerProps {
    children?: React.ReactNode;
}

const DialogButtonsContainer: React.FC<DialogButtonsContainerProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default DialogButtonsContainer;