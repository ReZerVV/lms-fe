import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { ProductService } from "@/services";
import { GetProductsResponse } from "@/shared";

const useGetProducts = (
    page: number,
    limit: number,
    search: string
): UseQueryResult<GetProductsResponse, Error> => {
    return useQuery({
        queryKey: ["products", page, limit, search],
        queryFn: () => ProductService.getProducts(page, limit, search),
        placeholderData: keepPreviousData
    });
};

export default useGetProducts;
