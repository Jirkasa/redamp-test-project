import React from "react";
import IconDocs from "../../icons/docs.svg";
import IconClose from "../../icons/close.svg";
import styles from "./FileRow.module.scss";

interface FileRowProps {
    name: string;
    onRemove?: () => void;
}

const FileRow: React.FC<FileRowProps> = ({ name, onRemove }) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <IconDocs />
            </div>
            <span className={styles.name}>{name}</span>
            <button onClick={onRemove} className={styles.removeButton}>
                Remove
                <IconClose />
            </button>
        </div>
    );
}

export default FileRow;