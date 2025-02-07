import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <input {...props} ref={ref} className={styles.input} />
    );
});

export default Input;