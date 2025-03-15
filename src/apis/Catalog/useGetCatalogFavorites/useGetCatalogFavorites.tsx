import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { CatalogService } from "@/services";
import { GetCatalogProductsByIds } from "@/shared";

const useGetCatalogFavorites = (
    ids: string[]
): UseQueryResult<GetCatalogProductsByIds, Error> => {
    return useQuery({
        queryKey: ["favorites", ids],
        queryFn: () => CatalogService.getCatalogProductsByIds(ids),
        placeholderData: keepPreviousData
    });
};

export default useGetCatalogFavorites;
