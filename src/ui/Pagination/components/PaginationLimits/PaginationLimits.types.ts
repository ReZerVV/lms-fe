export interface PaginationLimitsProps {
    perPage: number;
    limitsList: number[];
    onChange: (value: number) => void;
    onChangeActivePage: (value: number) => void;
}
