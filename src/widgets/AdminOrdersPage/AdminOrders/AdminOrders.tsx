"use client";

import { useState } from "react";
import { ListPlus } from "lucide-react";

import { AdminOrdersCreatePopup, AdminOrdersTable } from "@/widgets";
import { SearchInput } from "@/components";
import { Button, Pagination } from "@/ui";

import { useGetOrders } from "@/apis";
import { paginationLimitsList } from "@/shared";

import styles from "./AdminOrders.module.scss";

const AdminOrders = () => {
    const [isCreatePopupOpen, setIsCreatePopupOpen] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(paginationLimitsList[0]);
    const [search, setSearch] = useState<string>("");

    const { data: ordersData, isLoading: ordersIsLoading } = useGetOrders(
        activePage,
        perPage,
        search
    );

    const handleCreatePopupOpen = () => {
        setIsCreatePopupOpen(true);
    };

    const handleCreatePopupClose = () => {
        setIsCreatePopupOpen(false);
    };

    return (
        <>
            <section className={styles.admin}>
                <div className="container">
                    <div className={styles.admin__inner}>
                        <h2 className={styles.admin__title}>Orders</h2>
                        <div className={styles.admin__row}>
                            <div className={styles.admin__search}>
                                <SearchInput onChange={setSearch} />
                            </div>
                            {/* DEMO */}
                            {/* <div className={styles.admin__actions}>
                                <Button
                                    leftIcon={
                                        <ListPlus
                                            size={20}
                                            strokeWidth={1.5}
                                            absoluteStrokeWidth
                                        />
                                    }
                                    onClick={handleCreatePopupOpen}
                                >
                                    Create
                                </Button>
                            </div> */}
                        </div>
                        {!ordersIsLoading ? (
                            <>
                                <div className={styles.admin__table}>
                                    <AdminOrdersTable
                                        data={ordersData?.data || []}
                                    />
                                </div>
                                <div className={styles.admin__pagination}>
                                    <Pagination
                                        currentPage={activePage}
                                        onChange={setActivePage}
                                        perPage={perPage}
                                        onChangePerPage={setPerPage}
                                        limitsList={paginationLimitsList}
                                        totalItems={ordersData?.totalItems || 0}
                                    />
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </section>
            {isCreatePopupOpen ? (
                <AdminOrdersCreatePopup handleClose={handleCreatePopupClose} />
            ) : null}
        </>
    );
};

export default AdminOrders;
