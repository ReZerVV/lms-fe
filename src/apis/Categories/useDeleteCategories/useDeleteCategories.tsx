import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { CategoryService } from "@/services";

const useDeleteCategories = (
    options?: UseMutationOptions<void, Error, string[]>
): UseMutationResult<void, Error, string[]> => {
    return useMutation({
        mutationFn: (ids) => CategoryService.deleteCategory(ids),
        ...options
    });
};

export default useDeleteCategories;
