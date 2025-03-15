import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { CatalogService } from "@/services";
import { GetCatalogProductsResponse } from "@/shared";

const useGetCatalogProducts = (
    page: number,
    limit: number,
    search: string,
    sort: string,
    maxPrice?: string | null,
    minPrice?: string | null,
    categoryIds?: string[] | null
): UseQueryResult<GetCatalogProductsResponse, Error> => {
    return useQuery({
        queryKey: [
            "catalog",
            "products",
            page,
            limit,
            search,
            sort,
            maxPrice,
            minPrice,
            categoryIds
        ],
        queryFn: () =>
            CatalogService.getCatalogProducts(
                page,
                limit,
                search,
                sort,
                maxPrice,
                minPrice,
                categoryIds
            ),
        placeholderData: keepPreviousData
    });
};

export default useGetCatalogProducts;
