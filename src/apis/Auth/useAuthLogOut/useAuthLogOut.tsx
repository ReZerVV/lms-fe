import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { AuthService } from "@/services";

const useAuthLogOut = (
    options?: UseMutationOptions<void, Error, void>
): UseMutationResult<void, Error, void> => {
    return useMutation({
        mutationFn: () => AuthService.logout(),
        ...options
    });
};

export default useAuthLogOut;
