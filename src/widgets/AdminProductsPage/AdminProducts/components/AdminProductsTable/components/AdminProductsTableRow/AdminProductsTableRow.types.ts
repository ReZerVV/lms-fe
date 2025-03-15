import { Row } from "@tanstack/react-table";

import { IProduct } from "@/shared";

export interface AdminProductsTableRowProps {
    row: Row<IProduct>;
    selectedItems: string[];
    handleSelectItem: (isChecked: boolean, id: string) => void;
    onDelete: (ids: string[]) => void;
    onToggle: ({ isActive, ids }: { isActive: boolean; ids: string[] }) => void;
}
