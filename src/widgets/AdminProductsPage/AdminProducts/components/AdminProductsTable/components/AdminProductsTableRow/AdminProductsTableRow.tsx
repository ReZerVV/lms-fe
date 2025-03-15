"use client";

import { useRouter } from "next/navigation";
import { flexRender } from "@tanstack/react-table";

import { AdminProductsTableDots } from "@/widgets";
import { Checkbox } from "@/ui";

import { ADMIN_EDIT_PRODUCTS_ROUTE } from "@/shared";
import { AdminProductsTableRowProps } from "./AdminProductsTableRow.types";

import styles from "./AdminProductsTableRow.module.scss";

const AdminProductsTableRow = ({
    row,
    selectedItems,
    handleSelectItem,
    onDelete,
    onToggle
}: AdminProductsTableRowProps) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`${ADMIN_EDIT_PRODUCTS_ROUTE}/${row.original.id}`);
    };

    const handleDelete = () => {
        onDelete([row.original.id]);
    };

    const handleToggle = () => {
        onToggle({ isActive: !row.original.isActive, ids: [row.original.id] });
    };

    return (
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
                <AdminProductsTableDots
                    isActive={row.original.isActive}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            </div>
        </div>
    );
};

export default AdminProductsTableRow;
