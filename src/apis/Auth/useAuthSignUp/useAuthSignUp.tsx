import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { AuthService } from "@/services";
import { SignUpRequest, SignUpResponse } from "@/shared";

const useAuthSignUp = (
    options?: UseMutationOptions<SignUpResponse, Error, SignUpRequest>
): UseMutationResult<SignUpResponse, Error, SignUpRequest> => {
    return useMutation({
        mutationFn: (data: SignUpRequest) => AuthService.signUp(data),
        ...options
    });
};

export default useAuthSignUp;
