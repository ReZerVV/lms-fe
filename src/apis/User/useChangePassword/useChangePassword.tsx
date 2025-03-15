import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { UserService } from "@/services";
import { ChangePasswordRequest } from "@/shared";

const useChangePassword = (
    options?: UseMutationOptions<void, Error, ChangePasswordRequest>
): UseMutationResult<void, Error, ChangePasswordRequest> => {
    return useMutation({
        mutationFn: (data) => UserService.changePassword(data),
        ...options
    });
};

export default useChangePassword;
