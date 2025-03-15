import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { OrderService } from "@/services";
import { GetHistoryResponse } from "@/shared";

const useGetHistory = (
    page: number,
    perPage: number
): UseQueryResult<GetHistoryResponse, Error> => {
    return useQuery({
        queryKey: ["history", page, perPage],
        queryFn: () => OrderService.getHistoryByUser(page, perPage),
        placeholderData: keepPreviousData
    });
};

export default useGetHistory;
