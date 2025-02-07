import React, { JSX } from "react";
import styles from "./StepsNavigation.module.scss";

interface StepsNavigationProps {
    stepsCount: number;
    enabledStepsCount: number;
    currentStep?: number;
    onClick?: (step: number) => void;
}

const StepsNavigation: React.FC<StepsNavigationProps> = ({ stepsCount, enabledStepsCount, currentStep, onClick }) => {
    let stepButtons: JSX.Element[] = [];
    for (let i = 1 ; i <= stepsCount ; i++) {
        stepButtons.push(
            <button
                key={i}
                className={`${styles.button} ${i === currentStep ? styles["button--active"] : ""}`}
                disabled={i > enabledStepsCount}
                onClick={() => onClick?.(i)}
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