import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { OrderService } from "@/services";
import { CreateOrderRequest } from "@/shared";

const useCreateOrder = (
    options?: UseMutationOptions<void, Error, CreateOrderRequest>
): UseMutationResult<void, Error, CreateOrderRequest> => {
    return useMutation({
        mutationFn: (data) => OrderService.createOrder(data),
        ...options
    });
};

export default useCreateOrder;
