export type PaginationType =
    | "page"
    | "prev"
    | "next"
    | "jump-prev"
    | "jump-next";

export interface PaginationProps {
    currentPage: number;
    perPage?: number;
    totalItems?: number;
    limitsList?: number[];
    hideOnSinglePage?: boolean;
    onChange: (page: number) => void;
    onChangePerPage?: (perPage: number) => void;
}
