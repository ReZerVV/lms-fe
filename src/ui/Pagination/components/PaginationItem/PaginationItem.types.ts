import { PaginationType } from "../../Pagination.types";

export interface PaginationItemProps {
    type: PaginationType;
    currentPage: number;
    value: number;
    totalPages: number;
}
