import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { UserService } from "@/services";
import { ChangeProfileRequest, ChangeProfileResponse } from "@/shared";

const useChangeProfile = (
    options?: UseMutationOptions<
        ChangeProfileResponse,
        Error,
        ChangeProfileRequest
    >
): UseMutationResult<ChangeProfileResponse, Error, ChangeProfileRequest> => {
    return useMutation({
        mutationFn: (data) => UserService.changeProfile(data),
        ...options
    });
};

export default useChangeProfile;
