import React, { useState } from "react";
import styles from "./FileDragInput.module.scss";

interface FileDragInputProps {
    message: string;
    onFileUpload: (file: File) => void;
}

const FileDragInput: React.FC<FileDragInputProps> = ({ message, onFileUpload }) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const fileInputRef = React.createRef<HTMLInputElement>();

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(true);
    }

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            onFileUpload(event.dataTransfer.files[0]);
            event.dataTransfer.clearData();
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            onFileUpload(event.target.files[0]);
        }
    }

    const handleClick = () => {
        fileInputRef.current?.click();
    }

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
            onKeyDown={event => (event.key === "Enter" || event.key === " ") && handleClick()}
            tabIndex={0}
            className={`${styles.dropZone} ${dragging ? styles["dropZone--dragging"] : ""}`}
        >
            <input ref={fileInputRef} onChange={handleFileChange} type="file" className={styles.input} />
            <p className={styles.message}>{message}</p>
        </div>
    );
}

export default FileDragInput;