import React, { useEffect, useRef, useState } from "react";
import styles from "./EditableTable.module.scss";
import { getCaret, setCaret } from "../../utils";
import DOMPurify from "dompurify";

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
    onEdit?: (rowKey: string, columnKey: string, value: string) => void;
}

const EditableTable: React.FC<EditableTableProps> = ({ columns, rows, onEdit }) => {
    const [editingCell, setEditingCell] = useState<{ rowKey: string, columnKey: string } | null>(null);
    const cellRef = useRef<HTMLTableCellElement>(null);
    const caretPos = useRef<number>(0);

    useEffect(() => {
        if (cellRef.current) {
            setCaret(cellRef.current, caretPos.current);
            cellRef.current.focus();
        }
    }, [rows]);

    const handleCellFocus = (rowKey: string, columnKey: string) => {
        setEditingCell({ rowKey, columnKey });
    }

    const handleInput = (value: string) => {
        if (cellRef.current) {
            caretPos.current = getCaret(cellRef.current);
        }
        if (editingCell) {
            const sanitizedValue = DOMPurify.sanitize(value);
            onEdit?.(editingCell.rowKey, editingCell.columnKey, sanitizedValue);
        }
    }

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
                                <td
                                    key={column.key}
                                    ref={editingCell?.rowKey === row.key && editingCell?.columnKey === column.key ? cellRef : null}
                                    contentEditable="true"
                                    suppressContentEditableWarning={true}
                                    onInput={(event) => handleInput(event.currentTarget.innerText)}
                                    onFocus={() => handleCellFocus(row.key, column.key)}
                                >
                                    {row.data[index]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EditableTable;