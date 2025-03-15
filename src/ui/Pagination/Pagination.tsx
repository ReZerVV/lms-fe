"use client";

import { useMemo } from "react";
import RCPagination from "rc-pagination";

import { PaginationItem, PaginationLimits } from "./components";

import { PaginationProps, PaginationType } from "./Pagination.types";

import "./Pagination.scss";
import styles from "./Pagination.module.scss";

const Pagination = ({
    currentPage,
    perPage = 10,
    onChangePerPage,
    totalItems = 0,
    limitsList,
    hideOnSinglePage = true,
    onChange
}: PaginationProps) => {
    const totalPages = useMemo(
        () => Math.ceil(totalItems / perPage),
        [totalItems]
    );

    const renderPaginationItem = (value: number, type: PaginationType) => {
        return (
            <PaginationItem
                type={type}
                value={value}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        );
    };

    if (hideOnSinglePage && totalPages <= 1) {
        return null;
    }

    return (
        <div className={styles.pagination}>
            {onChangePerPage && limitsList ? (
                <PaginationLimits
                    perPage={perPage}
                    limitsList={limitsList}
                    onChange={onChangePerPage}
                    onChangeActivePage={onChange}
                />
            ) : null}
            <RCPagination
                current={currentPage}
                pageSize={perPage}
                total={totalItems}
                onChange={onChange}
                itemRender={renderPaginationItem}
            />
        </div>
    );
};

export default Pagination;
