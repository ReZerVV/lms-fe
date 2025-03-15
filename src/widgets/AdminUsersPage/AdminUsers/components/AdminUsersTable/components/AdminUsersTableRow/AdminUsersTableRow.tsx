"use client";

import { useState } from "react";
import { flexRender } from "@tanstack/react-table";

import { AdminUsersDots, AdminUsersEditPopup } from "@/widgets";
import { Checkbox } from "@/ui";

import { AdminUsersTableRowProps } from "./AdminUsersTableRow.types";

import styles from "./AdminUsersTableRow.module.scss";

const AdminUsersTableRow = ({
    row,
    selectedItems,
    handleSelectItem,
    onDelete
}: AdminUsersTableRowProps) => {
    const [isEditPopupOpen, setIsEditPopupOpen] = useState<boolean>(false);

    const handleEditPopupOpen = () => {
        setIsEditPopupOpen(true);
    };

    const handleEditPopupClose = () => {
        setIsEditPopupOpen(false);
    };

    const handleDelete = () => {
        onDelete([row.original.id]);
    };

    return (
        <>
            <div className={styles.table__body_item}>
                <div className={styles.table__body_checkbox}>
                    <Checkbox
                        checked={selectedItems.includes(row.original.id)}
                        onChange={(e) =>
                            handleSelectItem(e.target.checked, row.original.id)
                        }
                    />
                </div>

                <div key={row.id} className={styles.table__body_row}>
                    {row.getVisibleCells().map((cell) => (
                        <div key={cell.id} className={styles.table__body_value}>
                            <p className={styles.table__body_value_text}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={styles.table__body_dots}>
                    <AdminUsersDots
                        handleEditOpen={handleEditPopupOpen}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
            {isEditPopupOpen ? (
                <AdminUsersEditPopup
                    user={row.original}
                    onClose={handleEditPopupClose}
                />
            ) : null}
        </>
    );
};

export default AdminUsersTableRow;
