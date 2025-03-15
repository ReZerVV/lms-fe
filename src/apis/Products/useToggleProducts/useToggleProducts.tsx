import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { ProductService } from "@/services";

const useToggleProducts = (
    options?: UseMutationOptions<
        void,
        Error,
        { isActive: boolean; ids: string[] }
    >
): UseMutationResult<void, Error, { isActive: boolean; ids: string[] }> => {
    return useMutation({
        mutationFn: ({ isActive, ids }) =>
            ProductService.toggleProducts(isActive, ids),
        ...options
    });
};

export default useToggleProducts;
