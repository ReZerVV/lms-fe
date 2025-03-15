import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { OrderService } from "@/services";
import { GetHistoryResponse } from "@/shared";

const useGetOrders = (
    page: number,
    perPage: number,
    search: string
): UseQueryResult<GetHistoryResponse, Error> => {
    return useQuery({
        queryKey: ["orders", page, perPage, search],
        queryFn: () => OrderService.getOrders(page, perPage, search),
        placeholderData: keepPreviousData
    });
};

export default useGetOrders;
