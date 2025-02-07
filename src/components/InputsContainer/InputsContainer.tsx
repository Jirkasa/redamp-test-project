import React from "react";
import styles from "./InputsContainer.module.scss";

interface InputsContainerProps {
    children?: React.ReactNode;
}

const InputsContainer: React.FC<InputsContainerProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default InputsContainer;