import React, { ReactElement } from "react";
import styles from "./RecapitulationDisplay.module.scss";

interface RecapitulationDisplayProps {
    children?: ReactElement<RecapilutationDisplayItemProps> | ReactElement<RecapilutationDisplayItemProps>[];
}

const RecapitulationDisplay: React.FC<RecapitulationDisplayProps> & {
    Item: React.FC<RecapilutationDisplayItemProps>;
} = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

interface RecapilutationDisplayItemProps {
    label: string;
    value: string;
}

const RecapilutationDisplayItem: React.FC<RecapilutationDisplayItemProps> = ({ label, value }) => {
    return (
        <div className={styles.row}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
}
RecapitulationDisplay.Item = RecapilutationDisplayItem;

export default RecapitulationDisplay;