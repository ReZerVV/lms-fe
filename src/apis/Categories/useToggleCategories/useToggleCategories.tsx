import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { CategoryService } from "@/services";

const useToggleCategories = (
    options?: UseMutationOptions<
        void,
        Error,
        { ids: string[]; isActive: boolean }
    >
): UseMutationResult<void, Error, { ids: string[]; isActive: boolean }> => {
    return useMutation({
        mutationFn: ({ ids, isActive }) =>
            CategoryService.toggleCategories(ids, isActive),
        ...options
    });
};

export default useToggleCategories;
