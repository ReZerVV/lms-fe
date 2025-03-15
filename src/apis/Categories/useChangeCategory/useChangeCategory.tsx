import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { CategoryService } from "@/services";

const useChangeCategory = (
    options?: UseMutationOptions<void, Error, { id: string; data: FormData }>
): UseMutationResult<void, Error, { id: string; data: FormData }> => {
    return useMutation({
        mutationFn: ({ id, data }) => CategoryService.changeCategory(id, data),
        ...options
    });
};

export default useChangeCategory;
