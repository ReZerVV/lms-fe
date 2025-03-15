import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { UserService } from "@/services";
import { ChangeUserRequest } from "@/shared";

const useChangeUser = (
    options?: UseMutationOptions<
        void,
        Error,
        { id: string; data: ChangeUserRequest }
    >
): UseMutationResult<void, Error, { id: string; data: ChangeUserRequest }> => {
    return useMutation({
        mutationFn: ({ id, data }) => UserService.changeUser(id, data),
        ...options
    });
};

export default useChangeUser;
