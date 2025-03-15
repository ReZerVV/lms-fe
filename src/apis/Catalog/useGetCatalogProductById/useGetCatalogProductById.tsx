import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { CatalogService } from "@/services";
import { GetCatalogProductByIdResponse } from "@/shared";

const useGetCatalogProductById = (
    id: string
): UseQueryResult<GetCatalogProductByIdResponse, Error> => {
    return useQuery({
        queryKey: ["catalog", "product", id],
        queryFn: () => CatalogService.getCatalogProductById(id)
    });
};

export default useGetCatalogProductById;
