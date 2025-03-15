"use client";

import { useState } from "react";

import { HistoryItem } from "@/widgets";
import { Pagination } from "@/ui";

import { useGetHistory } from "@/apis";
import { paginationLimitsList } from "@/shared";

import styles from "./History.module.scss";

const History = () => {
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(paginationLimitsList[0]);

    const { data: historyData, isLoading: historyIsLoading } = useGetHistory(
        activePage,
        perPage
    );

    return !historyIsLoading ? (
        <section className={styles.history}>
            <div className="container">
                <div className={styles.history__inner}>
                    <h2 className={styles.history__title}>History</h2>

                    <div className={styles.history__items}>
                        {historyData?.data.map((item, index) => (
                            <HistoryItem
                                key={item?.id}
                                index={index}
                                item={item}
                            />
                        ))}
                    </div>
                    <div className={styles.history__pagination}>
                        <Pagination
                            currentPage={activePage}
                            onChange={setActivePage}
                            perPage={perPage}
                            onChangePerPage={setPerPage}
                            limitsList={paginationLimitsList}
                            totalItems={historyData?.totalItems || 0}
                        />
                    </div>
                </div>
            </div>
        </section>
    ) : null;
};

export default History;
