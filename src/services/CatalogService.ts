import {
    GetCatalogCategoriesResponse,
    GetCatalogProductByIdResponse,
    GetCatalogProductsByIds,
    GetCatalogProductsResponse,
    instance
} from "@/shared";

export default class CatalogService {
    static getCatalogProducts = (
        page: number,
        limit: number,
        search: string,
        sort: string,
        maxPrice?: string | null,
        minPrice?: string | null,
        categoryIds?: string[] | null
    ): Promise<GetCatalogProductsResponse> => {
        return instance.post(
            `catalog/products?page=${page}&limit=${limit}${search ? `&search=${search}` : ""}${sort ? `&sort=${sort}` : ""}${maxPrice ? `&maxPrice=${maxPrice}` : ""}${minPrice ? `&minPrice=${minPrice}` : ""}`,
            {
                categoryIds: categoryIds
            }
        );
    };

    static getCatalogProductById = (
        id: string
    ): Promise<GetCatalogProductByIdResponse> => {
        return instance.get(`catalog/products/${id}`);
    };

    static getCatalogProductsByIds = (
        ids: string[]
    ): Promise<GetCatalogProductsByIds> => {
        return instance.post("catalog/products/ids", {
            productIds: ids
        });
    };

    static getCatalogCategories = (
        limit?: number
    ): Promise<GetCatalogCategoriesResponse> => {
        return instance.get(
            `catalog/categories${limit ? `?limit=${limit}` : ""}`
        );
    };
}
