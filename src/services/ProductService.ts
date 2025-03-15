import {
    GetProductByIdResponse,
    GetProductsResponse,
    instance
} from "@/shared";

export default class ProductService {
    static getProducts = (
        page: number,
        limit: number,
        search: string
    ): Promise<GetProductsResponse> => {
        return instance.get(
            `products?page=${page}&limit=${limit}${search ? `&search=${search}` : ""}`
        );
    };

    static getProductById = (id: string): Promise<GetProductByIdResponse> => {
        return instance.get(`products/${id}`);
    };

    static createProduct = (data: FormData): Promise<void> => {
        return instance.post("products", data);
    };

    static editProduct = (id: string, data: FormData): Promise<void> => {
        return instance.patch(`products/${id}`, data);
    };

    static deleteProducts = (ids: string[]): Promise<void> => {
        return instance.post("products/delete", {
            ids: ids
        });
    };

    static toggleProducts = (
        isActive: boolean,
        ids: string[]
    ): Promise<void> => {
        return instance.patch("products/actions/toggle-enabled", {
            isActive: isActive,
            ids: ids
        });
    };
}
