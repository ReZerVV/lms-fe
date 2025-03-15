import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { UserService } from "@/services";
import { CreateUserRequest } from "@/shared";

const useCreateUser = (
    options?: UseMutationOptions<void, Error, CreateUserRequest>
): UseMutationResult<void, Error, CreateUserRequest> => {
    return useMutation({
        mutationFn: (data) => UserService.createUser(data),
        ...options
    });
};

export default useCreateUser;
