import { IUser } from "@/shared";

export interface AdminUsersEditPopupProps {
    user: IUser;
    onClose: () => void;
}
