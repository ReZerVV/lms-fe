"use client";

import { useState } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";

import { AdminUsersTableRow } from "@/widgets";
import { Checkbox } from "@/ui";

import { IUser, useMounted } from "@/shared";
import { AdminUsersProps } from "./AdminUsers.types";

import styles from "./AdminUsersTable.module.scss";

const columnHelper = createColumnHelper<IUser>();

const columns = [
    columnHelper.accessor("firstName", {
        header: () => <span>First Name</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("lastName", {
        header: () => <span>Last Name</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("email", {
        header: () => <span>Email</span>,
        cell: (info) => info.getValue()
    })
];

const AdminUsersTable = ({
    data,
    selectedItems,
    onSelect,
    onSelectAll,
    onDelete
}: AdminUsersProps) => {
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
                    <AdminUsersTableRow
                        key={row.original.id}
                        row={row}
                        selectedItems={selectedItems}
                        handleSelectItem={handleSelectItem}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdminUsersTable;
