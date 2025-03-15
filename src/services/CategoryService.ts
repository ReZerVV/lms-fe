import {
    GetCategoriesListResponse,
    GetCategoriesResponse,
    instance
} from "@/shared";

export default class CategoryService {
    static getCategories = (
        page: number,
        limit: number,
        search: string
    ): Promise<GetCategoriesResponse> => {
        return instance.get(
            `categories?page=${page}&limit=${limit}${search ? `&query=${search}` : ""}`
        );
    };

    static createCategory = (data: FormData): Promise<void> => {
        return instance.post("categories", data);
    };

    static changeCategory = (id: string, data: FormData): Promise<void> => {
        return instance.patch(`categories/${id}`, data);
    };

    static deleteCategory = (ids: string[]): Promise<void> => {
        return instance.post("categories/delete", {
            ids: ids
        });
    };

    static toggleCategories = (
        ids: string[],
        isActive: boolean
    ): Promise<void> => {
        return instance.patch("categories/actions/toggle-enabled", {
            ids: ids,
            isActive: isActive
        });
    };

    static getCategoriesList = (): Promise<GetCategoriesListResponse> => {
        return instance.get("categories/list");
    };
}
