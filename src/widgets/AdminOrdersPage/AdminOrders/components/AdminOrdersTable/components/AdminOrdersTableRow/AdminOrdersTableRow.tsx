"use client";

import { useState } from "react";
import { flexRender } from "@tanstack/react-table";

import { AdminOrdersTableRowDots, AdminOrdersViewPopup } from "@/widgets";

import { AdminOrdersTableRowProps } from "./AdminOrdersTableRow.types";

import styles from "./AdminOrdersTableRow.module.scss";

const AdminOrdersTableRow = ({ row }: AdminOrdersTableRowProps) => {
    const [isViewPopup, setIsViewPopup] = useState<boolean>(false);

    const handleViewOpen = () => {
        setIsViewPopup(true);
    };

    const handleViewClose = () => {
        setIsViewPopup(false);
    };

    return (
        <>
            <div className={styles.table__body_item}>
                <div key={row.id} className={styles.table__body_row}>
                    {row.getVisibleCells().map((cell: any) => (
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
                    <AdminOrdersTableRowDots handleView={handleViewOpen} />
                </div>
            </div>
            {isViewPopup ? (
                <AdminOrdersViewPopup
                    item={row.original}
                    handleClose={handleViewClose}
                />
            ) : null}
        </>
    );
};

export default AdminOrdersTableRow;
