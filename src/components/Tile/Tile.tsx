import React from "react";
import styles from "./Tile.module.scss";

interface TileProps {
    children?: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ children }) => {
    return (
        <div className={styles.tile}>
            {children}
        </div>
    );
}

export default Tile;