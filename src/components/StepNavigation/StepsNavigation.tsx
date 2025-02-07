import React, { JSX } from "react";
import styles from "./StepsNavigation.module.scss";

interface StepsNavigationProps {
    stepsCount: number;
    enabledStepsCount: number;
    currentStep?: number;
}

const StepsNavigation: React.FC<StepsNavigationProps> = ({ stepsCount, enabledStepsCount, currentStep }) => {

    let stepButtons: JSX.Element[] = [];
    for (let i = 1 ; i <= stepsCount ; i++) {
        stepButtons.push(
            <button
                key={i}
                className={`${styles.button} ${i === currentStep ? styles["button--active"] : ""}`}
                disabled={i > enabledStepsCount}
            >
                {i}
            </button>
        );
    }

    return (
        <div className={styles.container}>
            {stepButtons}
        </div>
    );
}

export default StepsNavigation;