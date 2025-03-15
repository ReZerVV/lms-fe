import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { CatalogService } from "@/services";
import { GetCatalogCategoriesResponse } from "@/shared";

const useGetCatalogCategories = (
    limit?: number
): UseQueryResult<GetCatalogCategoriesResponse, Error> => {
    return useQuery({
        queryKey: ["catalog", "categories"],
        queryFn: () => CatalogService.getCatalogCategories(limit)
    });
};

export default useGetCatalogCategories;
