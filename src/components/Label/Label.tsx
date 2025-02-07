import React from "react";
import styles from "./Label.module.scss";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = (props) => {
    return (
        <label {...props} className={styles.label}>{props.children}</label>
    );
}

export default Label;