import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { CategoryService } from "@/services";
import { GetCategoriesListResponse } from "@/shared";

const useGetCategoriesList = (): UseQueryResult<
    GetCategoriesListResponse,
    Error
> => {
    return useQuery({
        queryKey: ["categories", "list"],
        queryFn: () => CategoryService.getCategoriesList(),
        placeholderData: keepPreviousData
    });
};

export default useGetCategoriesList;
