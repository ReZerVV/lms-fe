import { Row } from "@tanstack/react-table";

import { ICategory } from "@/shared";

export interface AdminCategoriesTableRowProps {
    row: Row<ICategory>;
    selectedItems: string[];
    handleSelectItem: (isChecked: boolean, id: string) => void;
    onDelete: (ids: string[]) => void;
    onToggle: ({ ids, isActive }: { ids: string[]; isActive: boolean }) => void;
}
