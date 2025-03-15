import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { UserService } from "@/services";

const useDeleteUsers = (
    options?: UseMutationOptions<void, Error, string[]>
): UseMutationResult<void, Error, string[]> => {
    return useMutation({
        mutationFn: (ids) => UserService.deleteUsers(ids),
        ...options
    });
};

export default useDeleteUsers;
