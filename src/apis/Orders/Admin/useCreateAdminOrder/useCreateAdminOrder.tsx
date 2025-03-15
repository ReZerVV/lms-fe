import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { OrderService } from "@/services";
import { CreateOrderRequest } from "@/shared";

const useCreateAdminOrder = (
    options?: UseMutationOptions<void, Error, CreateOrderRequest>
): UseMutationResult<void, Error, CreateOrderRequest> => {
    return useMutation({
        mutationFn: (data) => OrderService.createAdminOrder(data),
        ...options
    });
};

export default useCreateAdminOrder;
