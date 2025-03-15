import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { OrderService } from "@/services";
import { GetHistoryByIdResponse } from "@/shared";

const useGetHistoryById = (
    id: string
): UseQueryResult<GetHistoryByIdResponse, Error> => {
    return useQuery({
        queryKey: ["history", id],
        queryFn: () => OrderService.getHistoryById(id)
    });
};

export default useGetHistoryById;
