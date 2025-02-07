import React, { forwardRef } from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    return (
        <textarea {...props} ref={ref} className={styles.textarea} />
    );
});

export default TextArea;