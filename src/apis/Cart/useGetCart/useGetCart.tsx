import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { CatalogService } from "@/services";
import { GetCatalogProductsByIds } from "@/shared";

const useGetCart = (
    ids: string[]
): UseQueryResult<GetCatalogProductsByIds, Error> => {
    return useQuery({
        queryKey: ["cart", ids],
        queryFn: () => CatalogService.getCatalogProductsByIds(ids),
        placeholderData: keepPreviousData
    });
};

export default useGetCart;
