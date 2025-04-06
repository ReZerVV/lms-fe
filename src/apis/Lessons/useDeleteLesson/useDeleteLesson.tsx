import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { LessonsService } from "@/services";

const useDeleteLesson = (
    options?: UseMutationOptions<void, Error, { productId: string; id: string }>
): UseMutationResult<void, Error, { productId: string; id: string }> => {
    return useMutation({
        mutationFn: ({ productId, id }) =>
            LessonsService.deleteLesson(productId, id),
        ...options
    });
};

export default useDeleteLesson;
