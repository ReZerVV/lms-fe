"use client";

import { useState } from "react";
import { AxiosError } from "axios";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { ERROR_MESSAGES } from "@/shared";

interface ErrorResponse {
    message: string;
}

const useQueryClientProvider = () => {
    const errorHandler = (error: AxiosError<ErrorResponse>) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            return;
        }
        return toast.error(error.response?.data.message || ERROR_MESSAGES);
    };

    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: 0
                    }
                },
                queryCache: new QueryCache({
                    onError: (error: any) => errorHandler(error)
                }),
                mutationCache: new MutationCache({
                    onError: (error: any) => errorHandler(error)
                })
            })
    );

    return queryClient;
};

export default useQueryClientProvider;
