import { ICategory } from "@/shared";

export interface AdminCategoriesTableProps {
    data: ICategory[];
    selectedItems: string[];
    onSelect: (isChecked: boolean, id: string) => void;
    onSelectAll: (isChecked: boolean) => void;
    onDelete: (ids: string[]) => void;
    onToggle: ({ ids, isActive }: { ids: string[]; isActive: boolean }) => void;
}
