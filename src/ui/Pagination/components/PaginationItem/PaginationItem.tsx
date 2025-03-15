import cn from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PaginationItemProps } from "./PaginationItem.types";
import { PaginationType } from "../../Pagination.types";

import styles from "./PaginationItem.module.scss";

const renderPaginationValue = (type: PaginationType, value: number) => {
    switch (type) {
        case "page":
            return value;

        case "jump-prev":
            return "...";

        case "jump-next":
            return "...";

        case "prev":
            return (
                <div className={cn(styles.pagination__arrow)}>
                    <ChevronLeft size={20} strokeWidth={1.5} />
                </div>
            );
        case "next":
            return (
                <div className={cn(styles.pagination__arrow)}>
                    <ChevronRight size={20} strokeWidth={1.5} />
                </div>
            );

        default:
            return null;
    }
};

const PaginationItem = ({ type, value, currentPage }: PaginationItemProps) => {
    const isPrevControl = type === "prev";
    const isNextControl = type === "next";

    const isActivePage = type === "page" && currentPage === value;

    return (
        <div
            className={cn(styles.pagination__item, {
                [styles.pagination__item_prev]: isPrevControl,
                [styles.pagination__item_next]: isNextControl,
                [styles.pagination__item_active]: isActivePage
            })}
        >
            {renderPaginationValue(type, value)}
        </div>
    );
};

export default PaginationItem;
