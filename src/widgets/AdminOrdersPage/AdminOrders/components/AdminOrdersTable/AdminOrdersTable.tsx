"use client";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";
import dayjs from "dayjs";

import { AdminOrdersTableRow } from "@/widgets";

import { IHistory, useMounted } from "@/shared";
import { AdminOrdersTableProps } from "./AdminOrdersTable.types";

import styles from "./AdminOrdersTable.module.scss";

const columnHelper = createColumnHelper<IHistory>();

const columns = [
    columnHelper.accessor("id", {
        header: () => <span>ID</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor((row) => `${row?.firstName} ${row?.lastName}`, {
        id: "fullname",
        header: () => <span>Name</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("phoneNumber", {
        header: () => <span>Phone number</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("email", {
        header: () => <span>Email</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("createdAt", {
        header: () => <span>Created at</span>,
        cell: (info) => dayjs(info.getValue()).format("DD.MM.YYYY")
    })
];

const AdminOrdersTable = ({ data }: AdminOrdersTableProps) => {
    const { mounted } = useMounted();

    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    if (!mounted) return null;

    return (
        <div className={styles.table}>
            <div className={styles.table__head}>
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
                    <AdminOrdersTableRow key={row.original.id} row={row} />
                ))}
            </div>
        </div>
    );
};

export default AdminOrdersTable;
