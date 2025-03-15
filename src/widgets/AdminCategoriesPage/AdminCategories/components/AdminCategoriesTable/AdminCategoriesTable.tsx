"use client";

import { useState } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";

import { AdminCategoriesTableRow } from "@/widgets";
import { Checkbox } from "@/ui";

import { ICategory, useMounted } from "@/shared";
import { AdminCategoriesTableProps } from "./AdminCategoriesTable.types";

import styles from "./AdminCategoriesTable.module.scss";

const columnHelper = createColumnHelper<ICategory>();

const columns = [
    columnHelper.accessor("title", {
        header: () => <span>Title</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("description", {
        header: () => <span>Description</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("isActive", {
        header: () => <span>Active</span>,
        cell: (info) => (info.getValue() ? "Active" : "Inactive")
    })
];

const AdminCategoriesTable = ({
    data,
    selectedItems,
    onSelect,
    onSelectAll,
    onDelete,
    onToggle
}: AdminCategoriesTableProps) => {
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

    const { mounted } = useMounted();

    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    if (!mounted) return null;

    const handleSelectAll = (isChecked: boolean) => {
        setIsAllSelected(isChecked);
        onSelectAll(isChecked);
    };

    const handleSelectItem = (isChecked: boolean, id: string) => {
        onSelect(isChecked, id);
        setIsAllSelected(data.length === selectedItems.length + 1 && isChecked);
    };

    return (
        <div className={styles.table}>
            <div className={styles.table__head}>
                <div className={styles.table__head_checkbox}>
                    <Checkbox
                        checked={isAllSelected}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                </div>

                {table.getHeaderGroups().map((headerGroup) => (
                    <div
                        key={headerGroup.id}
                        className={styles.table__head_row}
                    >
                        {headerGroup.headers.map((header) => (
                            <p
                                key={header.id}
                                className={styles.table__head_item}
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </p>
                        ))}
                    </div>
                ))}

                <div className={styles.table__head_dots} />
            </div>
            <div className={styles.table__body}>
                {table.getRowModel().rows.map((row) => (
                    <AdminCategoriesTableRow
                        key={row.original.id}
                        row={row}
                        selectedItems={selectedItems}
                        handleSelectItem={handleSelectItem}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdminCategoriesTable;
