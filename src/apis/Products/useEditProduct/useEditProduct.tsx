import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { ProductService } from "@/services";

const useEditProduct = (
    options?: UseMutationOptions<void, Error, { id: string; data: FormData }>
): UseMutationResult<void, Error, { id: string; data: FormData }> => {
    return useMutation({
        mutationFn: ({ id, data }) => ProductService.editProduct(id, data),
        ...options
    });
};

export default useEditProduct;
