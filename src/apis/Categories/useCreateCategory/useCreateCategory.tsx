import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { CategoryService } from "@/services";

const useCreateCategory = (
    options?: UseMutationOptions<void, Error, FormData>
): UseMutationResult<void, Error, FormData> => {
    return useMutation({
        mutationFn: (data) => CategoryService.createCategory(data),
        ...options
    });
};

export default useCreateCategory;
