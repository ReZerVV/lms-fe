import { IUser } from "@/shared";

export interface AdminUsersProps {
    data: IUser[];
    selectedItems: string[];
    onSelect: (isChecked: boolean, id: string) => void;
    onSelectAll: (isChecked: boolean) => void;
    onDelete: (ids: string[]) => void;
}
