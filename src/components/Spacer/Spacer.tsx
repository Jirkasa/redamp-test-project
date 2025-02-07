import React from "react";

interface SpacerProps {
    size: number;
}

const UNIT_SIZE = 0.4;

const Spacer: React.FC<SpacerProps> = ({ size }) => {
    return <div style={{ height: `${UNIT_SIZE * size}rem` }} />;
}

export default Spacer;