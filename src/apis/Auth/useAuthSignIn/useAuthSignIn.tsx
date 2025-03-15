import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { AuthService } from "@/services";
import { SignInRequest, SignInResponse } from "@/shared";

const useAuthSignIn = (
    options?: UseMutationOptions<SignInResponse, Error, SignInRequest>
): UseMutationResult<SignInResponse, Error, SignInRequest> => {
    return useMutation({
        mutationFn: (data: SignInRequest) => AuthService.signIn(data),
        ...options
    });
};

export default useAuthSignIn;
