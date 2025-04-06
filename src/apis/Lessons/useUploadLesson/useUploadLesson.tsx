import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { LessonsService } from "@/services";

const useUploadLesson = (
    options?: UseMutationOptions<
        void,
        Error,
        {
            productId: string;
            data: FormData;
            signal: AbortController;
        }
    >
): UseMutationResult<
    void,
    Error,
    {
        productId: string;
        data: FormData;
        signal: AbortController;
    }
> => {
    return useMutation({
        mutationFn: ({ productId, data, signal }) =>
            LessonsService.uploadVideo(productId, data, signal),
        ...options
    });
};

export default useUploadLesson;
