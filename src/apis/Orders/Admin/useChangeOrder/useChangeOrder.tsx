import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { OrderService } from "@/services";
import { ChangeOrderRequest } from "@/shared";

const useChangeOrder = (
    options?: UseMutationOptions<
        void,
        Error,
        { id: string; data: ChangeOrderRequest }
    >
): UseMutationResult<void, Error, { id: string; data: ChangeOrderRequest }> => {
    return useMutation({
        mutationFn: ({ id, data }) => OrderService.changeOrder(id, data),
        ...options
    });
};

export default useChangeOrder;
