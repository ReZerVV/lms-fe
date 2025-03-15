interface OnChangeProps {
    maxPrice?: string | null;
    minPrice?: string | null;
    categoryIds?: string[] | null;
}

export interface CatalogFilterProps {
    onChange: (value: OnChangeProps) => void;
}
