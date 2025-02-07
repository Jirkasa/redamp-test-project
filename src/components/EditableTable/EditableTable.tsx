import React from "react";
import styles from "./EditableTable.module.scss";

interface TableColumn {
    title: string;
    key: string;
}

interface TableRow {
    key: string;
    data: string[];
}

interface EditableTableProps {
    columns: TableColumn[];
    rows: TableRow[];
}

const EditableTable: React.FC<EditableTableProps> = ({ columns, rows }) => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>{column.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row => (
                        <tr key={row.key}>
                            {columns.map((column, index) => (
                                <td key={column.key}>{row.data[index]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EditableTable;