import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { ProductService } from "@/services";

const useDeleteProducts = (
    options?: UseMutationOptions<void, Error, string[]>
): UseMutationResult<void, Error, string[]> => {
    return useMutation({
        mutationFn: (ids) => ProductService.deleteProducts(ids),
        ...options
    });
};

export default useDeleteProducts;
