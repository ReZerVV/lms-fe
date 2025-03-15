import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { ProductService } from "@/services";

const useCreateProduct = (
    options?: UseMutationOptions<void, Error, FormData>
): UseMutationResult<void, Error, FormData> => {
    return useMutation({
        mutationFn: (data) => ProductService.createProduct(data),
        ...options
    });
};

export default useCreateProduct;
