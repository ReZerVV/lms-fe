export interface AdminProductsTableProps {
    data: any[];
    selectedItems: string[];
    onSelect: (isChecked: boolean, id: string) => void;
    onSelectAll: (isChecked: boolean) => void;
    onDelete: (ids: string[]) => void;
    onToggle: ({ isActive, ids }: { isActive: boolean; ids: string[] }) => void;
}
