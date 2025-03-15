import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { UserService } from "@/services";
import { ChangeAddressRequest, ChangeAddressResponse } from "@/shared";

const useChangeAddress = (
    options?: UseMutationOptions<
        ChangeAddressResponse,
        Error,
        ChangeAddressRequest
    >
): UseMutationResult<ChangeAddressResponse, Error, ChangeAddressRequest> => {
    return useMutation({
        mutationFn: (data) => UserService.changeAddress(data),
        ...options
    });
};

export default useChangeAddress;
