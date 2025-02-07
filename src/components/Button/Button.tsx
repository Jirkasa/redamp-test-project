import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, outlined, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${outlined ? styles["button--outlined"] : ""}`}>
            {children}
        </button>
    );
}

export default Button;