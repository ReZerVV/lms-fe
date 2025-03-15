import { Row } from "@tanstack/react-table";

import { IUser } from "@/shared";

export interface AdminUsersTableRowProps {
    row: Row<IUser>;
    selectedItems: string[];
    handleSelectItem: (isChecked: boolean, id: string) => void;
    onDelete: (ids: string[]) => void;
}
