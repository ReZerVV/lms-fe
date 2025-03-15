import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { CategoryService } from "@/services";
import { GetCategoriesResponse } from "@/shared";

const useGetCategories = (
    page: number,
    limit: number,
    search: string
): UseQueryResult<GetCategoriesResponse, Error> => {
    return useQuery({
        queryKey: ["categories", page, limit, search],
        queryFn: () => CategoryService.getCategories(page, limit, search),
        placeholderData: keepPreviousData
    });
};

export default useGetCategories;
