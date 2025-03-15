import { ICategory } from "@/shared";

export interface AdminCategoriesEditPopupProsp {
    category: ICategory;
    onClose: () => void;
}
