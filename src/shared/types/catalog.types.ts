import { ICategory } from "./category.types";
import { IProduct } from "./product.types";

export interface GetCatalogProductsResponse {
    data: IProduct[];
    page: number;
    totalPages: number;
    totalItems: number;
}

export interface GetCatalogProductByIdResponse {
    data: IProduct;
}

export interface GetCatalogCategoriesResponse {
    data: ICategory[];
}

export interface GetCatalogProductsByIds {
    data: IProduct[];
}
